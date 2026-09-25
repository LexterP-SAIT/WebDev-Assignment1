// Constants
const poundsToKilograms = (pounds: number): number => pounds / 2.20462;
const kilogramsToPounds = (kilograms: number): number => kilograms * 2.20462;
const milesToKilometers = (miles: number): number => miles * 1.609344;
const kilometersToMiles = (kilometers: number): number => kilometers / 1.609344;
const celsiusToFarenheit = (celsius: number): number => (celsius * 9) / 5 + 32;
const farenheitToCelsius = (farenheit: number): number => ((farenheit - 32) * 5) / 9;


type Unit = 'lb' | 'kg' | 'mi' | 'km' | 'C' | 'F';
type ConversionInput = number | number[];

const createConverter = (fromUnit: Unit, toUnit: Unit) => {
    let conversionFormula: (val: number) => number;

    if (fromUnit === 'lb' && toUnit === 'kg') conversionFormula = poundsToKilograms;
    else if (fromUnit === 'kg' && toUnit === 'lb') conversionFormula = kilogramsToPounds;
    else if (fromUnit === 'mi' && toUnit === 'km') conversionFormula = milesToKilometers;
    else if (fromUnit === 'km' && toUnit === 'mi') conversionFormula = kilometersToMiles;
    else if (fromUnit === 'C' && toUnit === 'F') conversionFormula = celsiusToFarenheit;
    else if (fromUnit === 'F' && toUnit === 'C') conversionFormula = farenheitToCelsius;


    return (input: ConversionInput): ConversionInput => {
        if (Array.isArray(input)) {
            return input.map((val) => Number(conversionFormula(val).toFixed(2)));
        }
        return Number(conversionFormula(input).toFixed(2));
    };
};

// Parser for Array
const parseInput = (value: string): ConversionInput => {
    if (value.includes(',')) {
        return value.split(',').map(v => parseFloat(v.trim()));
    }
    return parseFloat(value);
};

// Initialize Conversion
const convertLBtoKG = createConverter('lb', 'kg');
const convertKGtoLB = createConverter('kg', 'lb');
const convertMItoKM = createConverter('mi', 'km');
const convertKMtoMI = createConverter('km', 'mi');
const convertCtoF = createConverter('C', 'F');
const convertFtoC = createConverter('F', 'C');

// Weight
const inputLBtoKG = document.getElementById("inputLBtoKG") as HTMLInputElement;
const buttonLBtoKG = document.getElementById("buttonLBtoKG") as HTMLButtonElement;
const outputLBtoKG = document.getElementById("outputLBtoKG") as HTMLElement;
buttonLBtoKG?.addEventListener('click', () => {
    const result = convertLBtoKG(parseInput(inputLBtoKG.value));
    outputLBtoKG.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});

const inputKGtoLB = document.getElementById("inputKGtoLB") as HTMLInputElement;
const buttonKGtoLB = document.getElementById("buttonKGtoLB") as HTMLButtonElement;
const outputKGtoLB = document.getElementById("outputKGtoLB") as HTMLElement;
buttonKGtoLB?.addEventListener('click', () => {
    const result = convertKGtoLB(parseInput(inputKGtoLB.value));
    outputKGtoLB.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});

// Distance
const inputMItoKM = document.getElementById("inputMItoKM") as HTMLInputElement;
const buttonMItoKM = document.getElementById("buttonMItoKM") as HTMLButtonElement;
const outputMItoKM = document.getElementById("outputMItoKM") as HTMLElement;
buttonMItoKM?.addEventListener('click', () => {
    const result = convertMItoKM(parseInput(inputMItoKM.value));
    outputMItoKM.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});

const inputKMtoMI = document.getElementById("inputKMtoMI") as HTMLInputElement;
const buttonKMtoMI = document.getElementById("buttonKMtoMI") as HTMLButtonElement;
const outputKMtoMI = document.getElementById("outputKMtoMI") as HTMLElement;
buttonKMtoMI?.addEventListener('click', () => {
    const result = convertKMtoMI(parseInput(inputKMtoMI.value));
    outputKMtoMI.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});

// Temperature
const inputCtoF = document.getElementById("inputCtoF") as HTMLInputElement;
const buttonCtoF = document.getElementById("buttonCtoF") as HTMLButtonElement;
const outputCtoF = document.getElementById("outputCtoF") as HTMLElement;
buttonCtoF?.addEventListener('click', () => {
    const result = convertCtoF(parseInput(inputCtoF.value));
    outputCtoF.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});

const inputFtoC = document.getElementById("inputFtoC") as HTMLInputElement;
const buttonFtoC = document.getElementById("buttonFtoC") as HTMLButtonElement;
const outputFtoC = document.getElementById("outputFtoC") as HTMLElement;
buttonFtoC?.addEventListener('click', () => {
    const result = convertFtoC(parseInput(inputFtoC.value));
    outputFtoC.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});

// Tab Switching Logic
const tabs = ['weight', 'distance', 'temp'];

tabs.forEach(tab => {
    const button = document.getElementById(`tab-button-${tab}`) as HTMLButtonElement;
    
    button?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
        });
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('text-slate-300', 'hover:bg-slate-800', 'hover:text-white');
        });
        
        document.getElementById(`tab-${tab}`)?.classList.remove('hidden');
        
        target.classList.remove('text-slate-300', 'hover:bg-slate-800');
        target.classList.add('bg-blue-600', 'text-white');
    });
});