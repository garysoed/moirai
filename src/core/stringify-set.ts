import {truncateContents} from './truncate-contents';
import {Verbosity} from './verbosity';

type StringifyFn = (target: any, verbosity: number) => string;

export function stringifySet(
    target: Set<unknown>,
    verbosity: number,
    stringify: StringifyFn,
): string {
  if (verbosity === Verbosity.NONE) {
    return '';
  }

  const stringifiedProperties = truncateContents(
      [...target].map(value => stringify(value, verbosity - 1)),
  ).join(', ');

  return `Set({${stringifiedProperties}})`;
}
