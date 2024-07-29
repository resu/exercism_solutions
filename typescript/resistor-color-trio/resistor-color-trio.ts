const COLOR_MAP: { [key: string]: number } = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

function formatResistance(value: number): string {
  if (value >= 1e9) {
    return `${value / 1e9} gigaohms`;
  } else if (value >= 1e6) {
    return `${value / 1e6} megaohms`;
  } else if (value >= 1e3) {
    return `${value / 1e3} kiloohms`;
  } else {
    return `${value} ohms`;
  }
}

export function decodedResistorValue(colors: string[]): string {
  const [first, second, third] = colors;
  const value = (COLOR_MAP[first] * 10 + COLOR_MAP[second]) * Math.pow(10, COLOR_MAP[third]);
  return formatResistance(value);
}