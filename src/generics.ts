/**
 * Determines if two objects of type T are equivalent when stringified
 * @param a First object to compare
 * @param b Second object to compare
 * @returns A boolean representing whether the two are equal as strings
 */
export const equalAsStrings = <T>(a: T, b: T) =>
  JSON.stringify(a) === JSON.stringify(b);
