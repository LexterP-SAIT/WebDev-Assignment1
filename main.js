// Assignment 1: Advanced JavaScript and Tailwind CSS 
// Program Name: Unit Converter 
// Names: Adrian Lexter Paule, 
//        Eunice Mendez
//        Rupinder Kaur
//  Date: September 26, 2026
// Constants and conversion formulas. uses arrow functions to convert between different units
const poundsToKilograms = (pounds) => pounds / 2.20462;
const kilogramsToPounds = (kilograms) => kilograms * 2.20462;
const milesToKilometers = (miles) => miles * 1.609344;
const kilometersToMiles = (kilometers) => kilometers / 1.609344;
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
// Higher order conversion function where it receives the unit to conver to and selects  the correct convesion formula.
// The returned function can either accept a single function or an array of values 
const createConverter = (fromUnit, toUnit) => {
    // stores the conversion forumale that matches the selected unit
    let conversionFormula;
    // if statement to check and use the appropriate conversion formula
    if (fromUnit === 'lb' && toUnit === 'kg')
        conversionFormula = poundsToKilograms;
    else if (fromUnit === 'kg' && toUnit === 'lb')
        conversionFormula = kilogramsToPounds;
    else if (fromUnit === 'mi' && toUnit === 'km')
        conversionFormula = milesToKilometers;
    else if (fromUnit === 'km' && toUnit === 'mi')
        conversionFormula = kilometersToMiles;
    else if (fromUnit === 'C' && toUnit === 'F')
        conversionFormula = celsiusToFahrenheit;
    else if (fromUnit === 'F' && toUnit === 'C')
        conversionFormula = fahrenheitToCelsius;
    // return an arrow function 
    return (input) => {
        // if input is an array, converts every value in the array
        if (Array.isArray(input)) {
            return input.map((val) => Number(conversionFormula(val).toFixed(2)));
        }
        // else if the input is a single number, only converts the single value
        return Number(conversionFormula(input).toFixed(2));
    };
};
// Parser for Array that checks if the user entered a single value or comma separated list of values
// If its a list of array, it is converted into an array of numbers, if just a single value it converts into one number
const parseInput = (value) => {
    if (value.includes(',')) {
        return value.split(',').map(v => parseFloat(v.trim()));
    }
    return parseFloat(value);
};
// Initialize Conversion are created using the createConverter higher order function 
// each of the converter is confiugured with a start unit and end unit
const convertLBtoKG = createConverter('lb', 'kg');
const convertKGtoLB = createConverter('kg', 'lb');
const convertMItoKM = createConverter('mi', 'km');
const convertKMtoMI = createConverter('km', 'mi');
const convertCtoF = createConverter('C', 'F');
const convertFtoC = createConverter('F', 'C');
// Weight conversion, this connects to the lbs/kg HTML forms to their conversion functions.
// when the user clicks convert, the input is parsed, converted and displayed in the results field
// Pounds to KG
const inputLBtoKG = document.getElementById("inputLBtoKG");
const buttonLBtoKG = document.getElementById("buttonLBtoKG");
const outputLBtoKG = document.getElementById("outputLBtoKG");
buttonLBtoKG?.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents page reload on button click or enter key
    // reads and parses the users input
    const result = convertLBtoKG(parseInput(inputLBtoKG.value));
    // displays either the converted value or list of arrays
    outputLBtoKG.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});
// kg to lbs
const inputKGtoLB = document.getElementById("inputKGtoLB");
const buttonKGtoLB = document.getElementById("buttonKGtoLB");
const outputKGtoLB = document.getElementById("outputKGtoLB");
buttonKGtoLB?.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents page reload on button click or enter key
    // reads and parses the users input
    const result = convertKGtoLB(parseInput(inputKGtoLB.value));
    // displays either the converted value or list of arrays
    outputKGtoLB.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});
// Distance, this connects the miles/kms HTML forms to their conversion function
// Miles to Km
const inputMItoKM = document.getElementById("inputMItoKM");
const buttonMItoKM = document.getElementById("buttonMItoKM");
const outputMItoKM = document.getElementById("outputMItoKM");
buttonMItoKM?.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents page reload on button click or enter key
    // reads and parses the users input
    const result = convertMItoKM(parseInput(inputMItoKM.value));
    // display the converted single value or list of arrays
    outputMItoKM.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});
// Kilometers to miles
const inputKMtoMI = document.getElementById("inputKMtoMI");
const buttonKMtoMI = document.getElementById("buttonKMtoMI");
const outputKMtoMI = document.getElementById("outputKMtoMI");
buttonKMtoMI?.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents page reload on button click or enter key
    // reads and parses the users input
    const result = convertKMtoMI(parseInput(inputKMtoMI.value));
    // displays either the converted value or list of arrays
    outputKMtoMI.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});
// Temperature, this connects the Celsius and Fahrenheit HTML forms to their conversion functions
// Celsius to Fahrenheit
const inputCtoF = document.getElementById("inputCtoF");
const buttonCtoF = document.getElementById("buttonCtoF");
const outputCtoF = document.getElementById("outputCtoF");
buttonCtoF?.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents page reload on button click or enter key
    // reads and parses the users input
    const result = convertCtoF(parseInput(inputCtoF.value));
    // displays either the converted value or list of arrays
    outputCtoF.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});
// Fahrenheit to Celsius
const inputFtoC = document.getElementById("inputFtoC");
const buttonFtoC = document.getElementById("buttonFtoC");
const outputFtoC = document.getElementById("outputFtoC");
buttonFtoC?.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents page reload on button click or enter key
    // reads and parses the users input
    const result = convertFtoC(parseInput(inputFtoC.value));
    // displays either the converted value or list of arrays
    outputFtoC.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});
// Tab Switching Logic, when a tab is clicked, the other tab contents are hidden and selected tab is highlighted
const tabs = ['weight', 'distance', 'temp'];
tabs.forEach(tab => {
    // finds the corresponding tab button in the HTML 
    const button = document.getElementById(`tab-button-${tab}`);
    button?.addEventListener('click', (e) => {
        // gets the button that was clicked
        const target = e.target;
        // hides the other tabs
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
        });
        // removes the active styling from all tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('bg-green-600', 'text-white');
            btn.classList.add('text-slate-300', 'hover:bg-slate-800', 'hover:text-white');
        });
        // shows the content for the selected tab
        document.getElementById(`tab-${tab}`)?.classList.remove('hidden');
        // add active styling for the selected tab
        target.classList.remove('text-slate-300', 'hover:bg-slate-800');
        target.classList.add('bg-green-600', 'text-white');
    });
});
export {};
