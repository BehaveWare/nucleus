/**
 * Loops through an array executing an action on each element in parallel
 * @param array Array to loop through
 * @param actionAsync Function to be called on each element
 * @param batchSize (Optional) Size of batches, for working with larger arrays
 */
export declare const foreachParallelAsync: <T>(array: T[], actionAsync: (element: T) => Promise<void>, batchSize?: number | undefined) => Promise<void>;
/**
 * Maps an array of type T[] to an array of type T[][] in parallel.
 * The order of the output array can not be guaranteed. When the order
 * needs to be maintained a Synchronous approach should be used.
 * @param array Array to map
 * @param mapAsync Mapping function
 * @param batchSize Size of batches for dealing with large arrays
 * @returns A promise with the mapped array of type TT[]
 */
export declare const mapParallelAsync: <T, TT>(array: T[], mapAsync: (element: T) => Promise<TT>, batchSize?: number | undefined) => Promise<TT[]>;
