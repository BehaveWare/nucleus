import { batchArray, equalAsStrings } from "../src";

describe("batchArray", () => {
  it("should return an empty T[][] if an empty array is passed in", () => {
    // Arrange
    const array: any[] = [];
    const batchSize: number = 10;

    // Act
    const result = batchArray(array, batchSize);

    // Assert
    expect(result.length).toBe(0);
  });

  it("should return an array with one value (the original array) if batchSize is 0", () => {
    // Arrange
    const array: any[] = createMixedArray();
    const batchSize: number = 0;

    // Act
    const result = batchArray(array, batchSize);

    // Assert
    expect(result.length).toBe(1);
    expect(equalAsStrings(result[0], array)).toBe(true);
  });

  it("should break an array into an array of batches", () => {
    // Arrange
    const array: any[] = createMixedArray();
    const batchSize: number = 3;

    // Act
    const result = batchArray(array, batchSize);

    // Assert
    expect(result.length).toBe(Math.ceil(array.length / batchSize));
    expect(
      equalAsStrings(
        array,
        result.reduce((x, y) => [...x, ...y]),
      ),
    ).toBe(true);
  });
});

const createMixedArray = () => [
  9,
  10,
  33,
  "cheese",
  "milk",
  10.34,
  { happy: "sure" },
];
