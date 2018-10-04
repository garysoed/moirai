import { Verbosity } from './verbosity';

export function stringifyString(target: string, verbosity: number): string {
  const maxLength = (verbosity + 1) * 5;
  if (target.length > maxLength) {
    return `"${target.substr(maxLength - 1)}…`;
  }

  return `"${target}"`;
}
