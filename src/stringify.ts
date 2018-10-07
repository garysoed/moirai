import { stringifyArray } from './stringify-array';
import { stringifyBoolean } from './stringify-boolean';
import { stringifyFunction } from './stringify-function';
import { stringifyNull } from './stringify-null';
import { NumberFormat, stringifyNumber } from './stringify-number';
import { stringifyObject } from './stringify-object';
import { stringifyString } from './stringify-string';
import { stringifySymbol } from './stringify-symbol';
import { stringifyUndefined } from './stringify-undefined';
import { Verbosity } from './verbosity';

function assertUnreachable(_: never): never {
  throw new Error('Unreachable code reached');
}

type SimpleTypes = Function|object|string|symbol|boolean|null|undefined|unknown[];

export function stringify(target: number, verbosity: number, format?: NumberFormat): string;
export function stringify(target: SimpleTypes, verbosity: number): string;
export function stringify(
    target: SimpleTypes|number,
    verbosity: number,
    format: NumberFormat = NumberFormat.DECIMAL): string {
  if (verbosity === Verbosity.NONE) {
    return '…';
  }

  if (typeof target === 'number') {
    if (format === undefined) {
      throw new Error(`Required format is missing`);
    }

    return stringifyNumber(target, verbosity, format);
  } else if (target === undefined) {
    return stringifyUndefined();
  } else if (target === null) {
    return stringifyNull();
  } else if (target instanceof Function) {
    return stringifyFunction(target, verbosity);
  } else if (typeof target === 'string') {
    return stringifyString(target, verbosity);
  } else if (typeof target === 'boolean') {
    return stringifyBoolean(target, verbosity);
  } else if (typeof target === 'symbol') {
    return stringifySymbol(target, verbosity);
  } else if (target instanceof Array) {
    return stringifyArray(target, verbosity, stringify);
  } else if (typeof target === 'object') {
    return stringifyObject(target, verbosity, stringify);
  } else {
    throw assertUnreachable(target);
  }
}
