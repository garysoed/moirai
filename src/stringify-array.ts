import { Verbosity } from './verbosity';

type StringifyFn = (target: any, verbosity: number) => string;

export function stringifyArray(target: Array<unknown>, verbosity: number, stringify: StringifyFn):
    string {
  if (verbosity === Verbosity.NONE) {
    return '';
  }

  const stringifiedProperties = target
      .map(value => stringify(value, verbosity - 1))
      .join(', ');

  return `[${stringifiedProperties}]`;
}
