/**
 * Capitalizes the first letter of a given word.
 * @param word Word to capitalize
 * @returns A capitalized copy of the word
 *
 * **Example:**
 * ```
 * const result: string = capitalize("nucleus");
 * console.log(result); // Nucleus
 * ```
 */
export declare const capitalize: (word: string) => string;
/**
 * Retrieves the filename from a path.
 * @param path Filepath or Url to retrieve the filename from
 * @returns A filename
 *
 * **Examples:**
 * ```
 * const nameFromUrl: string = filenameFrom("https://www.behaveware.org/test.jpeg");
 * console.log(nameFromUrl); // test.jpeg
 *
 * const nameFromFilepath: string = filenameFrom("C:\\behaveware\\nucleus\\test.jpeg");
 * console.log(nameFromFilepath); // test.jpeg
 * ```
 */
export declare const filenameFrom: (path: string) => string;
/**
 * Determines if text is an integer.
 * @param text Text to check
 * @returns Whether or not the text is an integer
 *
 * **Example:**
 * ```
 * const result: boolean = isInteger("42");
 * console.log(result); //true
 * ```
 */
export declare const isInteger: (text: string) => boolean;
/**
 * Determines if text is an email.
 * Based on the [RFC 5322](https://stackoverflow.com/a/201378/8122716) Specification.
 * @param text Text to check
 * @returns Whether or not the text is an email
 *
 * **Example:**
 * ```
 * const result: boolean = isEmail("support@behaveware.org");
 * console.log(result); // true
 * ```
 */
export declare const isEmail: (text: string) => boolean;
/**
 * Determines if text is a phone number.
 * Based on the solution from [Regular Expressions Cookbook, 2nd Edition by Jan Goyvaerts, Steven Levithan](https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s02.html).
 * @param text Text to check
 * @returns Whether or not the text is a phone number
 *
 * **Example:**
 * ```
 * const result: boolean = isPhoneNumber("555-555-555");
 * console.log(result); // true
 * ```
 */
export declare const isPhoneNumber: (text: string) => boolean;
