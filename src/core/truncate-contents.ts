const MAX_PROPERTY_COUNT = 5;

export function truncateContents(contents: readonly string[]): readonly string[] {
  return contents.length <= MAX_PROPERTY_COUNT
    ? contents
    : [...contents.slice(0, MAX_PROPERTY_COUNT), '…'];
}