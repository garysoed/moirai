import {Observable} from 'rxjs';

import {isBrowserContext} from './is-browser-context';
import {stringifyArray} from './stringify-array';
import {stringifyBoolean} from './stringify-boolean';
import {customStringify, stringifyCustom} from './stringify-custom';
import {stringifyElement} from './stringify-element';
import {stringifyError} from './stringify-error';
import {stringifyFunction} from './stringify-function';
import {stringifyMap} from './stringify-map';
import {stringifyNull} from './stringify-null';
import {NumberFormat, stringifyNumber} from './stringify-number';
import {stringifyObject} from './stringify-object';
import {stringifyRegexp} from './stringify-regexp';
import {stringifySet} from './stringify-set';
import {stringifyString} from './stringify-string';
import {stringifySymbol} from './stringify-symbol';
import {stringifyUndefined} from './stringify-undefined';
import {Verbosity} from './verbosity';


/**
 * Stringifies the given number.
 *
 * @param target - The number to stringify.
 * @param verbosity - Verbosity level.
 * @param format - Format of the number.
 * @returns The stringified number.
 * @public
 */
export function stringify(target: number, verbosity: number, format?: NumberFormat): string;
/**
 * Stringifies the given object.
 *
 * @param target - The object to stringify.
 * @param verbosity - Verbosity level.
 * @returns The stringified object.
 * @public
 */
export function stringify(target: any, verbosity: number): string;
export function stringify(
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    target: any,
    verbosity: number,
    format: NumberFormat = NumberFormat.DECIMAL): string {
  if (verbosity === Verbosity.NONE) {
    return '…';
  }

  if (target instanceof Error) {
    return stringifyError(target, verbosity);
  } else if (target instanceof RegExp) {
    return stringifyRegexp(target);
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
    return stringifyString(target);
  } else if (typeof target === 'boolean') {
    return stringifyBoolean(target);
  } else if (typeof target === 'symbol') {
    return stringifySymbol(target, verbosity);
  } else if (target instanceof Map) {
    return stringifyMap(target, verbosity, stringify);
  } else if (target instanceof Set) {
    return stringifySet(target, verbosity, stringify);
  } else if (target instanceof Array) {
    return stringifyArray(target, verbosity, stringify);
  } else if (target instanceof Observable) {
    return 'Observable';
  } else if (target instanceof Promise) {
    return 'Promise';
  } else if (isBrowserContext() && target instanceof Element) {
    return stringifyElement(target);
  } else if (typeof target === 'object') {
    return stringifyObject(target, verbosity, stringify);
  } else {
    return `${target}`;
  }
}
