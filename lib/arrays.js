"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraysAreEqual = exports.compareArrays = exports.batchArray = void 0;
/**
 * Breaks an array T[] into an array of batches T[][]
 * @param {T[]} [array] Array to break into batches
 * @param {number} [batchSize = 0] Size of the batches
 * @returns An array of batches: T[][]
 */
const batchArray = (array, batchSize = 0) => {
    if (array.length === 0) {
        return [];
    }
    const tempArray = array.slice(0);
    if (batchSize === 0) {
        return [tempArray];
    }
    const batchCount = Math.ceil(tempArray.length / batchSize);
    const batches = [];
    for (let i = 0; i < batchCount; i++) {
        batches.push(tempArray.splice(0, batchSize));
    }
    return batches;
};
exports.batchArray = batchArray;
/**
 * Compares two arrays of type T where T extends IComparable
 * @param a Array of IComparable objects
 * @param b Array of IComparable objects
 * @returns boolean
 */
const compareArrays = (a, b) => {
    return (a.every((x) => b.some((y) => x.equals(y))) &&
        b.every((x) => a.some((y) => x.equals(y))) &&
        a.length === b.length);
};
exports.compareArrays = compareArrays;
/**
 * Determines if two arrays of type T[] are equal
 * @param a Array of objects
 * @param b Array of objects
 * @param equals Function for comparing objects of type T
 * @returns boolean
 */
const arraysAreEqual = (a, b, equals) => {
    return (a.every((x) => b.some((y) => equals(x, y))) &&
        b.every((x) => a.some((y) => equals(x, y))) &&
        a.length === b.length);
};
exports.arraysAreEqual = arraysAreEqual;
