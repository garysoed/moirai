type StringifyFn = (target: any, verbosity: number) => string;

export function stringifyArray(target: unknown[], verbosity: number, stringify: StringifyFn):
    string {
  const stringifiedProperties = target
      .map(value => stringify(value, verbosity - 1))
      .join(', ');

  return `[${stringifiedProperties}]`;
}
