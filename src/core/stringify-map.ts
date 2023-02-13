import {truncateContents} from './truncate-contents';
import {Verbosity} from './verbosity';

type StringifyFn = (target: any, verbosity: number) => string;

export function stringifyMap(
    target: Map<unknown, unknown>,
    verbosity: number,
    stringify: StringifyFn,
): string {
  if (verbosity === Verbosity.NONE) {
    return '';
  }

  const stringifiedProperties = truncateContents(
      [...target]
          .map(([key, value]) => {
            return `${stringify(key, verbosity - 1)}: ${stringify(value, verbosity - 1)}`;
          }),
  ).join('; ');

  return `Map({${stringifiedProperties}})`;
}
