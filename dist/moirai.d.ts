/**
 * Moirai is a library for stringifying JS Objects.
 *
 * @remarks
 * This is used mainly for printing out objects for debugging purposes.
 *
 * @packageDocumentation
 * @public
 */


/**
 * Symbol of custom function to stringify an object.
 *
 * @remarks
 * The function takes in a Verbosity and returns the custom string.
 *
 * @public
 */
export declare const customStringify: unique symbol;

/**
 * Types for number formatting.
 *
 * @public
 */
export declare enum NumberFormat {
    DECIMAL = 0,
    /**
     * Rounds the number to 3 most significant figures, and display them as exponent. For 1234, it is
     * 1.23e3.
     */
    EXPONENT = 1,
    /**
     * 0x1234
     */
    HEX = 2,
    /**
     * 0o1234
     */
    OCTAL = 3
}

/**
 * Stringifies the given number.
 *
 * @param target - The number to stringify.
 * @param verbosity - Verbosity level.
 * @param format - Format of the number.
 * @returns The stringified number.
 * @public
 */
export declare function stringify(target: number, verbosity: number, format?: NumberFormat): string;

/**
 * Stringifies the given object.
 *
 * @param target - The object to stringify.
 * @param verbosity - Verbosity level.
 * @returns The stringified object.
 * @public
 */
export declare function stringify(target: any, verbosity: number): string;

/**
 * Tagger to stringify all placeholders in the template string.
 *
 * @param verbosity - Verbosity level of the string's placeholders.
 * @returns The tagger to tag template strings.
 * @public
 */
export declare function _stringify(verbosity: number): TemplateTag;

declare type TemplateTag = (literals: TemplateStringsArray, ...placeholders: any[]) => string;

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
export declare enum Verbosity {
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
    DEBUG = 2
}

export { }
