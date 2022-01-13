"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapParallelAsync = exports.foreachParallelAsync = void 0;
const arrays_1 = require("./arrays");
/**
 * Loops through an array executing an action on each element in parallel
 * @param array Array to loop through
 * @param actionAsync Function to be called on each element
 * @param batchSize (Optional) Size of batches, for working with larger arrays
 */
const foreachParallelAsync = async (array, actionAsync, batchSize) => {
    const batches = (0, arrays_1.batchArray)(array, batchSize || 0);
    for (const batch of batches) {
        const promises = [];
        for (const element of batch) {
            promises.push(actionAsync(element));
        }
        await Promise.all(promises);
    }
};
exports.foreachParallelAsync = foreachParallelAsync;
/**
 * Maps an array of type T[] to an array of type T[][] in parallel.
 * The order of the output array can not be guaranteed. When the order
 * needs to be maintained a Synchronous approach should be used.
 * @param array Array to map
 * @param mapAsync Mapping function
 * @param batchSize Size of batches for dealing with large arrays
 * @returns A promise with the mapped array of type TT[]
 */
const mapParallelAsync = async (array, mapAsync, batchSize) => {
    const batches = (0, arrays_1.batchArray)(array, batchSize || 0);
    let mappedArray = [];
    for (const batch of batches) {
        const promises = [];
        for (const element of batch) {
            promises.push(mapAsync(element));
        }
        mappedArray = mappedArray.concat(await Promise.all(promises));
    }
    return mappedArray;
};
exports.mapParallelAsync = mapParallelAsync;
