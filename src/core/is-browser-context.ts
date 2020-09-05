export function isBrowserContext(): boolean {
  try {
    return !!window;
  } catch (e) {
    return false;
  }
}
