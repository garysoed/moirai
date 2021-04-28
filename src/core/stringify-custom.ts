/**
 * Symbol of custom function to stringify an object.
 *
 * @remarks
 * The function takes in a Verbosity and returns the custom string.
 *
 * @public
 */
export const customStringify = Symbol('customStringify');

type CustomObject = object & {[customStringify](verbosity: number): string};

export function stringifyCustom(
    target: CustomObject,
    verbosity: number): string {
  return target[customStringify](verbosity);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function hasCustomStringify(target: any): target is CustomObject {
  return target[customStringify] instanceof Function;
}
