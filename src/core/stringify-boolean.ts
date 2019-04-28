import { Verbosity } from './verbosity';

export function stringifyBoolean(target: boolean, verbosity: number): string {
  if (verbosity === Verbosity.DEBUG) {
    return target ? 'T' : 'F';
  }

  return target ? 'TRUE' : 'FALSE';
}
