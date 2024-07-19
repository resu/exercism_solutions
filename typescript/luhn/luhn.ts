export function valid(digitString: unknown): boolean {
  if (typeof digitString !== 'string') return false;

  const cleanedString = digitString.replace(/\s+/g, '');
  if (!/^\d+$/.test(cleanedString) || cleanedString.length <= 1) return false;

  let sum = 0;
  let shouldDouble = false;

  for (let i = cleanedString.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedString[i], 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}