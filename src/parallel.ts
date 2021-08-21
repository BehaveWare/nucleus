import { batchArray } from "./arrays";

/**
 * Loops through an array executing an action on each element in parallel
 * @param array Array to loop through
 * @param actionAsync Function to be called on each element
 * @param batchSize (Optional) Size of batches, for working with larger arrays
 */
export const foreachParallelAsync = async <T>(
  array: T[],
  actionAsync: (element: T) => Promise<void>,
  batchSize?: number,
) => {
  const batches: T[][] = batchArray(array, batchSize || 0);
  for (const batch of batches) {
    const promises: Promise<void>[] = [];
    for (const element of batch) {
      promises.push(actionAsync(element));
    }

    await Promise.all(promises);
  }
};

/**
 * Maps an array of type T[] to an array of type T[][] in parallel.
 * The order of the output array can not be guaranteed. When the order
 * needs to be maintained a Synchronous approach should be used.
 * @param array Array to map
 * @param mapAsync Mapping function
 * @param batchSize Size of batches for dealing with large arrays
 * @returns
 */
export const mapParallelAsync = async <T, TT>(
  array: T[],
  mapAsync: (element: T) => Promise<TT>,
  batchSize?: number,
) => {
  const batches: T[][] = batchArray(array, batchSize || 0);
  let mappedArray: TT[] = [];
  for (const batch of batches) {
    const promises: Promise<TT>[] = [];
    for (const element of batch) {
      promises.push(mapAsync(element));
    }

    mappedArray = mappedArray.concat(await Promise.all(promises));
  }

  return mappedArray;
};
