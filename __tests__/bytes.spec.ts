import {
  GIGABYTE_SIZE,
  KILOBYTE_SIZE,
  MEGABYTE_SIZE,
  TERABYTE_SIZE,
  toGigabytes,
  toKilobytes,
  toMegabytes,
  toTerabytes,
  trimBuffer,
} from "../src";

describe("trimBuffer", () => {
  it("should trim a buffer down to a maximum size in bytes", () => {
    // Arrange
    const buffer = Buffer.from("test");
    const maxSize = 2;

    // Act
    const result = trimBuffer(buffer, maxSize);

    // Assert
    expect(result.byteLength).toBeLessThanOrEqual(maxSize);
  });

  it("should return the buffer unaltered buffer if the buffer is size is less than or equal to the max size", () => {
    // Arrange
    const buffer = Buffer.from("test");
    const maxSize = 100;

    // Act
    const result = trimBuffer(buffer, maxSize);

    // Assert
    expect(result.byteLength).toBe(buffer.byteLength);
  });
});

describe("byte conversions", () => {
  it("should convert bytes to the appropriate metric", () => {
    // Arrange
    const multiplier = Math.random();

    // Act
    const kilobytes = toKilobytes(KILOBYTE_SIZE * multiplier);
    const megabytes = toMegabytes(MEGABYTE_SIZE * multiplier);
    const gigabytes = toGigabytes(GIGABYTE_SIZE * multiplier);
    const terabytes = toTerabytes(TERABYTE_SIZE * multiplier);

    // Assert
    expect(kilobytes).toBe(multiplier);
    expect(megabytes).toBe(multiplier);
    expect(gigabytes).toBe(multiplier);
    expect(terabytes).toBe(multiplier);
  });
});
