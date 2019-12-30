export function stringifyRegexp(target: RegExp): string {
  return `/${target.source}/${target.flags}`;
}
