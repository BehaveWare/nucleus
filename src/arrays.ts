/**
 * Breaks an array T[] into an array of batches T[][]
 * @param array Array to break into batches
 * @param batchSize Size of the batches
 * @returns An array of batches: T[][]
 */
export const batchArray = <T>(
  array: T[],
  batchSize: number,
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
