import { IComparable } from "./types";

/**
 * Breaks an array T[] into an array of batches T[][]
 * @param {T[]} [array] Array to break into batches
 * @param {number} [batchSize = 0] Size of the batches
 * @returns An array of batches: T[][]
 */
export const batchArray = <T>(
  array: T[],
  batchSize: number = 0,
): T[][] => {
  if (array.length === 0) {
    return [];
  }

  const tempArray = array.slice(0);
  if (batchSize === 0) {
    return [tempArray];
  }

  const batchCount = Math.ceil(tempArray.length / batchSize);
  const batches: T[][] = [];
  for (let i = 0; i < batchCount; i++) {
    batches.push(tempArray.splice(0, batchSize));
  }

  return batches;
};

/**
 * Compares two arrays of type T where T extends IComparable
 * @param a Array of IComparable objects
 * @param b Array of IComparable objects
 * @returns boolean
 */
export const compareArrays = <T extends IComparable<T>>(
  a: T[],
  b: T[],
) => {
  return (
    a.every((x) => b.some((y) => x.equals(y))) &&
    b.every((x) => a.some((y) => x.equals(y))) &&
    a.length === b.length
  );
};

/**
 * Determines if two arrays of type T[] are equal
 * @param a Array of objects
 * @param b Array of objects
 * @param equals Function for comparing objects of type T
 * @returns boolean
 */
export const arraysAreEqual = <T>(
  a: T[],
  b: T[],
  equals: (a: T, b: T) => boolean,
) => {
  return (
    a.every((x) => b.some((y) => equals(x, y))) &&
    b.every((x) => a.some((y) => equals(x, y))) &&
    a.length === b.length
  );
};
