export function stringifyString(target: string): string {
  const lines = target.split('\n');
  const trunc = lines.slice(0, 10);
  if (lines.length > 10) {
    trunc.push('…');
  }
  return `"${trunc.join('\n')}"`;
}
