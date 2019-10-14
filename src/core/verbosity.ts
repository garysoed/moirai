/**
 * Verbosity levels of stringified objects.
 *
 * @remarks
 * These levels are just integers. Those the values are specified in this enum, you can pass any
 * numbers as you wish.
 *
 * When stringifying an object, the verbosity level drops by one every time the function recursively
 * stringifies the object's properties.
 *
 * For example:
 *
 * ```ts
 * // Suppose example is stringified with verbosity = 2.
 * const example = {
 *   a: { // This will be stringified with verbosity = 1
 *     b: { // This will be stringified with verbosity = 0
 *       c: {} // This will not be stringified.
 *     },
 *     d: 2, // This will be stringified with verbosity = 1
 *   }
 * };
 * ```
 *
 * @public
 */
export enum Verbosity {
  /**
   * Nothing is printed out.
   */
  NONE = 0,

  /**
   * Just enough to identify stuff ... maybe.
   */
  QUIET = 1,

  /**
   * Verbose, useful for debugging.
   */
  DEBUG = 4,
}
