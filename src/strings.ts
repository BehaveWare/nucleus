/**
 * Capitalizes the first letter of a given word
 * @param word Word to capitalize
 * @returns A capitalized copy of the word
 */
export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase().concat(word.slice(1));

/**
 * Retrieves the filename from a path
 * @param path Path to get the file name from (can be a filepath or url)
 * @returns A filename
 */
export const filenameFrom = (path: string) => {
  const index = path.indexOf("?");
  const tempPath = index < 0 ? path : path.substring(0, index);
  return tempPath.replace(/^.*[\\\/]/, "");
};
