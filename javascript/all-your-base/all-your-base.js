export const convert = (digits, inputBase, outputBase) => {
  validateBases(inputBase, outputBase);
  validateDigits(digits, inputBase);

  const decimal = toDecimal(digits, inputBase);
  return fromDecimal(decimal, outputBase);
};

const validateBases = (inputBase, outputBase) => {
  if (!isValidBase(inputBase)) throw new Error('Wrong input base');
  if (!isValidBase(outputBase)) throw new Error('Wrong output base');
};

const isValidBase = (base) => Number.isInteger(base) && base > 1;

const validateDigits = (digits, base) => {
  if (digits.length === 0 || (digits.length > 1 && digits[0] === 0) || 
      digits.some(d => d < 0 || d >= base)) {
    throw new Error('Input has wrong format');
  }
};

const toDecimal = (digits, base) => 
  digits.reduce((acc, digit) => acc * base + digit, 0);

const fromDecimal = (decimal, base) => {
  if (decimal === 0) return [0];
  
  const result = [];
  let value = decimal;
  while (value > 0) {
    result.unshift(value % base);
    value = Math.floor(value / base);
  }
  return result;
};