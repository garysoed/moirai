import { Verbosity } from './verbosity';

export enum NumberFormat {
  DECIMAL,
  EXPONENT,
  HEX,
  OCTAL,
}

export function stringifyNumber(target: number, verbosity: number, format: NumberFormat): string {
  switch (format) {
    case NumberFormat.DECIMAL:
      return stringifyDecimal(target, verbosity);
    case NumberFormat.EXPONENT:
      return stringifyExponent(target);
    case NumberFormat.HEX:
      return `0x${target.toString(16)}`;
    case NumberFormat.OCTAL:
      return `0o${target.toString(8)}`;
  }
}

function stringifyDecimal(target: number, verbosity: number): string {
  const str = target.toString(10);
  if (verbosity >= Verbosity.DEBUG || str.length <= 5) {
    return str;
  }

  return stringifyExponent(target);
}

function stringifyExponent(target: number): string {
  const exp = Math.floor(Math.log10(target));
  const num = target / Math.pow(10, exp);
  const rounded = Math.round(num * 100) / 100;

  return `${rounded.toString(10)}e${exp}`;
}
