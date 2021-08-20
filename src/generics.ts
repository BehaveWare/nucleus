/**
 * Determines if two items of type T are equivalent when stringified
 * @param one First thing to compare
 * @param another Second thing to compare
 * @returns A boolean representing whether the two are equal as strings
 */
export const equalAsStrings = <T>(one: T, another: T) =>
  JSON.stringify(one) === JSON.stringify(another);
