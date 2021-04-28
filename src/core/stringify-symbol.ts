import {Verbosity} from './verbosity';

export function stringifySymbol(target: symbol, verbosity: number): string {
  if (verbosity === Verbosity.QUIET) {
    return 'sym';
  }

  return `sym(${target.toString()})`;
}
