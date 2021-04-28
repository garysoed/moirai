import {Verbosity} from './verbosity';

export function stringifyError(target: Error, verbosity: number):
    string {
  switch (verbosity) {
    case Verbosity.NONE:
      return '';
    case Verbosity.QUIET:
      return target.message;
    default:
      return [
        target.message,
        target.stack,
      ].join('\n');
  }
}
