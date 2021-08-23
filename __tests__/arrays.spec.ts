import {
  batchArray,
  compareArrays,
  equalAsStrings,
  arraysAreEqual,
} from "../src";
import { IComparable } from "../src/types";

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

    // Act
    const result = batchArray(array);

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

describe("compareArrays", () => {
  it("should determine the two arrays are NOT equal", () => {
    // Arrange
    const arrayA = createIComparableArray();
    const arrayB = createIComparableArray();
    arrayB.push(createIComparable("not equal anymore"));

    // Act
    const result = compareArrays(arrayA, arrayB);

    // Assert
    expect(result).toBe(false);
  });

  it("should determine the two arrays are equal", () => {
    // Arrange
    const arrayA = createIComparableArray();
    const arrayB = createIComparableArray();

    // Act
    const result = compareArrays(arrayA, arrayB);

    // Assert
    expect(result).toBe(true);
  });
});

describe("arraysAreEqual", () => {
  it("should determine the arrays are not equal", () => {
    // Arrange
    const arrayA = createMixedArray();
    const arrayB = createMixedArray();
    arrayB.push("not equal anymore");

    // Act
    const result = arraysAreEqual(arrayA, arrayB, equalAsStrings);

    // Assert
    expect(result).toBe(false);
  });

  it("should determine the arrays are equal", () => {
    // Arrange
    const arrayA = createMixedArray();
    const arrayB = createMixedArray();

    // Act
    const result = arraysAreEqual(arrayA, arrayB, equalAsStrings);

    // Assert
    expect(result).toBe(true);
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

const createIComparableArray = (): IComparable<any>[] => [
  createIComparable("test"),
  createIComparable("moreTests"),
];

const createIComparable = (value: string): SimpleComparable => {
  return {
    value,
    equals: (object: any) => object.value === value,
  };
};

interface SimpleComparable extends IComparable<SimpleComparable> {
  value: string;
}
