export function stringifyElement(target: Element): string {
  return `<${target.tagName.toLowerCase()} />`;
}
