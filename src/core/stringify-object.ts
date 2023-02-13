import {isBrowserContext} from './is-browser-context';
import {hasCustomStringify, stringifyCustom} from './stringify-custom';
import {truncateContents} from './truncate-contents';
import {Verbosity} from './verbosity';

type StringifyFn = (target: any, verbosity: number) => string;

export function stringifyObject(target: object, verbosity: number, stringify: StringifyFn):
    string {
  if (isBrowserContext() && target instanceof Window) {
    return '(Window)';
  }

  if (hasCustomStringify(target)) {
    return stringifyCustom(target, verbosity);
  }

  const ctorName = getCtorName(target);
  if (verbosity <= Verbosity.QUIET) {
    return ctorName;
  }

  const properties = new Map();
  for (const key of Object.keys(target)) {
    const value = stringify((target as any)[key], verbosity - 1);
    if (value) {
      properties.set(key, value);
    }
  }

  const stringifiedProperties = truncateContents(
      [...properties].map(([key, value]) => `${key}: ${value}`),
  ).join(', ');

  if (ctorName === DEFAULT_CTOR_NAME) {
    return `{${stringifiedProperties}}`;
  }

  return `${ctorName}(${stringifiedProperties})`;
}

const DEFAULT_CTOR_NAME = 'Object';
function getCtorName(target: object): string {
  const ctor = target.constructor;
  if (!ctor) {
    return DEFAULT_CTOR_NAME;
  }

  return ctor.name || DEFAULT_CTOR_NAME;
}
