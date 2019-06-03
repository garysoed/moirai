/**
 * Moirai is a library for stringifying JS Objects.
 *
 * @remarks
 * This is used mainly for printing out objects for debugging purposes.
 *
 * @packageDocumentation
 * @public
 */

export { customStringify } from '../src/core/stringify-custom';
export { stringify } from '../src/core/stringify';
export { NumberFormat } from '../src/core/stringify-number';
export { Verbosity } from '../src/core/verbosity';

export { tagDebug as _debug } from '../src/tag/tag-debug';
