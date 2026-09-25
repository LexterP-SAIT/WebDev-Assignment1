const poundsToKilograms = (pounds:number): number => pounds / 2.20462;
const kilogramsToPounds = (kilograms:number): number => kilograms * 2.20462;
const milesToKilometers = (miles:number): number => miles * 1.609344;
const kilometersToMiles = (kilometers:number): number => kilometers / 1.609344;
const celsiusToFarenheit = (celsius:number): number => (celsius * 9) / 5 + 32;;
const farenheitToCelsius = (farenheit:number): number => ((farenheit - 32) * 5) / 9;

type TabName = 'weight' | 'distance' | 'temp';
type Units = 'lb' | 'kg' | 'mi' | 'km' | 'C' | 'F';
type ConversionInput = number | number[];

const createConverter = (fromUnit: Units, toUnit: Units) => {
  let conversionFormula: (value: number) => number;

  if (fromUnit === 'lb' && toUnit === 'kg') conversionFormula = poundsToKilograms;
  else if (fromUnit === 'kg' && toUnit === 'lb') conversionFormula = kilogramsToPounds;
  else if (fromUnit === 'mi' && toUnit === 'km') conversionFormula = milesToKilometers;
  else if (fromUnit === 'km' && toUnit === 'mi') conversionFormula = kilometersToMiles;
  else if (fromUnit === 'C' && toUnit === 'F') conversionFormula = celsiusToFarenheit;
  else if (fromUnit === 'F' && toUnit === 'C') conversionFormula = farenheitToCelsius;

  return (input: ConversionInput): ConversionInput => {
    if (Array.isArray(input)) {
      return input.map((value) => conversionFormula(value));
    }
    return conversionFormula(input);
  };
};

const parseInput = (value: string): ConversionInput => {
  if (value.includes(',')) {
    return value.split(',').map(v => parseFloat(v.trim()));
  }
  return parseFloat(value);
};

const convertLBtoKG = createConverter('lb', 'kg');
const convertKGtoLB = createConverter('kg', 'lb');
const convertMItoKM = createConverter('mi', 'km');
const convertKMtoMI = createConverter('km', 'mi');
const convertCtoF = createConverter('C', 'F');
const convertFtoC = createConverter('F', 'C');

const inputLBtoKG = document.getElementById("inputLBtoKG") as HTMLInputElement;
const buttonLBtoKG = document.getElementById("buttonLBtoKG") as HTMLButtonElement;
const outputLBtoKG = document.getElementById("outputLBtoKG") as HTMLElement;

buttonLBtoKG?.addEventListener('click', () => {
  const inputValue = parseInput(inputLBtoKG.value);
  const result = convertLBtoKG(inputValue);
  outputLBtoKG.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});

const inputKGtoLB = document.getElementById("inputKGtoLB") as HTMLInputElement;
const buttonKGtoLB = document.getElementById("buttonKGtoLB") as HTMLButtonElement;
const outputKGtoLB = document.getElementById("outputKGtoLB") as HTMLElement;

buttonKGtoLB?.addEventListener('click', () => {
  const inputValue = parseInput(inputKGtoLB.value);
  const result = convertKGtoLB(inputValue);
  outputKGtoLB.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});

const inputMItoKM = document.getElementById("inputMItoKM") as HTMLInputElement;
const buttonMItoKM = document.getElementById("buttonMItoKM") as HTMLButtonElement;
const outputMItoKM = document.getElementById("outputMItoKM") as HTMLElement;

buttonMItoKM?.addEventListener('click', () => {
  const inputValue = parseInput(inputMItoKM.value);
  const result = convertMItoKM(inputValue);
  outputMItoKM.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});

const inputKMtoMI = document.getElementById("inputKMtoMI") as HTMLInputElement;
const buttonKMtoMI = document.getElementById("buttonKMtoMI") as HTMLButtonElement;
const outputKMtoMI = document.getElementById("outputKMtoMI") as HTMLElement;

buttonKMtoMI?.addEventListener('click', () => {
  const inputValue = parseInput(inputKMtoMI.value);
  const result = convertKMtoMI(inputValue);
  outputKMtoMI.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});

const inputCtoF = document.getElementById("inputCtoF") as HTMLInputElement;
const buttonCtoF = document.getElementById("buttonCtoF") as HTMLButtonElement;
const outputCtoF = document.getElementById("outputCtoF") as HTMLElement;

buttonCtoF?.addEventListener('click', () => {
  const inputValue = parseInput(inputCtoF.value);
  const result = convertCtoF(inputValue);
  outputCtoF.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});

const inputFtoC = document.getElementById("inputFtoC") as HTMLInputElement;
const buttonFtoC = document.getElementById("buttonFtoC") as HTMLButtonElement;
const outputFtoC = document.getElementById("outputFtoC") as HTMLElement;

buttonFtoC?.addEventListener('click', () => {
  const inputValue = parseInput(inputFtoC.value);
  const result = convertFtoC(inputValue);
  outputFtoC.textContent = Array.isArray(result) ? result.join(', ') : result.toString();
});