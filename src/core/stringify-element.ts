export function stringifyElement(target: Element, verbosity: number): string {
  return `<${target.tagName.toLowerCase()} />`;
}
