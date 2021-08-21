"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equalAsStrings = void 0;
/**
 * Determines if two objects of type T are equivalent when stringified
 * @param a First object to compare
 * @param b Second object to compare
 * @returns A boolean representing whether the two are equal as strings
 */
const equalAsStrings = (a, b) => JSON.stringify(a) === JSON.stringify(b);
exports.equalAsStrings = equalAsStrings;
