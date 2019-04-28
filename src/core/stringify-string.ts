export function stringifyString(target: string, verbosity: number): string {
  const maxLength = (verbosity + 1) * 5;
  if (target.length > maxLength) {
    return `"${target.substr(0, maxLength - 1)}…"`;
  }

  return `"${target}"`;
}
