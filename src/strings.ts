const emailPattern =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const phonePattern =
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const integerPattern = /^\d+$/;

/**
 * Capitalizes the first letter of a given word
 * @param word Word to capitalize
 * @returns A capitalized copy of the word
 */
export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase().concat(word.slice(1));

/**
 * Retrieves the filename from a path
 * @param path Filepath or Url to retrieve the filename from
 * @returns A filename
 */
export const filenameFrom = (path: string) => {
  const index = path.indexOf("?");
  const tempPath = index < 0 ? path : path.substring(0, index);
  return tempPath.replace(/^.*[\\\/]/, "");
};

/**
 * Determines if text is an integer
 * @param text Text to check
 * @returns Whether or not the text is an integer
 */
export const isInteger = (text: string) => integerPattern.test(text);

/**
 * Determines if text is an email
 * @param text Text to check
 * @returns Whether or not the text is an email
 */
export const isEmail = (text: string) => emailPattern.test(text);

/**
 * Determines if text is a phone number
 * @param text Text to check
 * @returns Whether or not the text is a phone number
 */
export const isPhoneNumber = (text: string) =>
  phonePattern.test(text);
