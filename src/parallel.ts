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

export const mapParallelAsync = async <T, TT>(
  array: T[],
  actionAsync: (element: T) => Promise<TT>,
  batchSize?: number,
) => {
  const batches: T[][] = batchArray(array, batchSize || 0);
};
