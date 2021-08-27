const emailPattern =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const phonePattern =
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const integerPattern = /^\d+$/;

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
export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase().concat(word.slice(1));

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
export const filenameFrom = (path: string) => {
  const index = path.indexOf("?");
  const tempPath = index < 0 ? path : path.substring(0, index);
  return tempPath.replace(/^.*[\\\/]/, "");
};

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
export const isInteger = (text: string) => integerPattern.test(text);

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
export const isEmail = (text: string) => emailPattern.test(text);

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
export const isPhoneNumber = (text: string) =>
  phonePattern.test(text);
