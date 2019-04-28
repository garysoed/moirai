export function stringifyFunction(target: Function, verbosity: number): string {
  if (verbosity <= 0) {
    return `() => {}`;
  }

  if (verbosity <= 1) {
    return `${target.name}() => {}`;
  }

  return `${target.name}([${target.length}]) => {}`;
}
