export const customStringify = Symbol('customStringify');

type CustomObject = object & {[customStringify](verbosity: number): string};

export function stringifyCustom(
    target: CustomObject,
    verbosity: number): string {
  return target[customStringify](verbosity);
}

export function hasCustomStringify(target: any): target is CustomObject {
  return target[customStringify] instanceof Function;
}
