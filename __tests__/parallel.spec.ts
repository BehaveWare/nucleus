import {
  arraysAreEqual,
  equalAsStrings,
  foreachParallelAsync,
  mapParallelAsync,
} from "../src";

describe("foreachParallelAsync", () => {
  it("should never call actionAsync if an empty array is passed in", async () => {
    // Arrange
    const array: any[] = [];
    const actionAsync = async (element: any) => {
      throw new Error("Action was called!");
    };

    // Act
    await foreachParallelAsync(array, actionAsync);
  });

  it("should call actionAsync once for each element", async () => {
    // Arrange
    const array = ["test1", "test2", 5, 6, { test: "Test" }];
    const actualArray: any[] = [];
    let actionAsyncCallCount = 0;
    const actionAsync = async (element: any) => {
      actionAsyncCallCount++;
      actualArray.push(element);
    };

    // Act
    await foreachParallelAsync(array, actionAsync);

    // Assert
    expect(actionAsyncCallCount).toBe(array.length);
    expect(arraysAreEqual(array, actualArray, equalAsStrings)).toBe(
      true,
    );
  });
});

describe("mapParallelAsync", () => {
  it("should return an empty array if on is passed in", async () => {
    // Arrange
    const array: any[] = [];
    const mapAsync = async () => {
      throw new Error("Map was called!");
    };

    // Act
    const result = await mapParallelAsync(array, mapAsync);

    // Assert
    expect(result.length).toBe(0);
  });

  it("should return an array of equal length with the mapped type", async () => {
    // Arrange
    const array: number[] = [1, 2, 3, 4, 5, 6];
    const actualArray: number[] = [];
    const mapAsync = async (element: number) => {
      actualArray.push(element);
      return element.toString();
    };

    // Act
    const result = await mapParallelAsync(array, mapAsync);

    // Assert
    expect(arraysAreEqual(array, actualArray, equalAsStrings)).toBe(
      true,
    );
    expect(
      result.every((x) => array.some((y) => y.toString() === x)),
    );
  });
});
