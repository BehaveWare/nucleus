import { IComparable } from "./types";
/**
 * Breaks an array T[] into an array of batches T[][]
 * @param array Array to break into batches
 * @param batchSize Size of the batches
 * @returns An array of batches: T[][]
 */
export declare const batchArray: <T>(array: T[], batchSize: number) => T[][];
/**
 * Compares two arrays of type T where T extends IComparable
 * @param a Array of IComparable objects
 * @param b Array of IComparable objects
 * @returns boolean
 */
export declare const compareArrays: <T extends IComparable<T>>(a: T[], b: T[]) => boolean;
/**
 * Determines if two arrays of type T[] are equal
 * @param a Array of objects
 * @param b Array of objects
 * @param equals Function for comparing objects of type T
 * @returns boolean
 */
export declare const arraysAreEqual: <T>(a: T[], b: T[], equals: (a: T, b: T) => boolean) => boolean;
