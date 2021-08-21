"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filenameFrom = exports.capitalize = void 0;
/**
 * Capitalizes the first letter of a given word
 * @param word Word to capitalize
 * @returns A capitalized copy of the word
 */
const capitalize = (word) => word.charAt(0).toUpperCase().concat(word.slice(1));
exports.capitalize = capitalize;
/**
 * Retrieves the filename from a path
 * @param path Filepath or Url to retrieve the filename from
 * @returns A filename
 */
const filenameFrom = (path) => {
    const index = path.indexOf("?");
    const tempPath = index < 0 ? path : path.substring(0, index);
    return tempPath.replace(/^.*[\\\/]/, "");
};
exports.filenameFrom = filenameFrom;
