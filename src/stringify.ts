import { Observable } from 'rxjs';
import { stringifyArray } from './stringify-array';
import { stringifyBoolean } from './stringify-boolean';
import { customStringify, stringifyCustom } from './stringify-custom';
import { stringifyError } from './stringify-error';
import { stringifyFunction } from './stringify-function';
import { stringifyNull } from './stringify-null';
import { NumberFormat, stringifyNumber } from './stringify-number';
import { stringifyObject } from './stringify-object';
import { stringifyString } from './stringify-string';
import { stringifySymbol } from './stringify-symbol';
import { stringifyUndefined } from './stringify-undefined';
import { Verbosity } from './verbosity';

export function stringify(target: number, verbosity: number, format?: NumberFormat): string;
export function stringify(target: any, verbosity: number): string;
export function stringify(
    target: any,
    verbosity: number,
    format: NumberFormat = NumberFormat.DECIMAL): string {
  if (verbosity === Verbosity.NONE) {
    return '…';
  }

  if (target instanceof Error) {
    return stringifyError(target, verbosity);
  } else if (typeof target === 'number') {
    return stringifyNumber(target, verbosity, format);
  } else if (target === undefined) {
    return stringifyUndefined();
  } else if (target === null) {
    return stringifyNull();
  } else if (target[customStringify] instanceof Function) {
    return stringifyCustom(target, verbosity);
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
  } else if (target instanceof Observable) {
    return 'Observable';
  } else if (target instanceof Promise) {
    return 'Promise';
  } else if (typeof target === 'object') {
    return stringifyObject(target, verbosity, stringify);
  } else {
    return `${target}`;
  }
}
