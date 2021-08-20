import { capitalize, filenameFrom } from "../src";

describe("capitalize", () => {
  it("should capitalize the first letter of a word", () => {
    // Arrange
    ["first", "Second", "THIRD", "fOURTH", "fItH"].map((word) => {
      // Act
      const result = capitalize(word);

      // Assert
      expect(result.charAt(0)).toBe(word.charAt(0).toUpperCase());
      expect(result.toLowerCase()).toBe(word.toLowerCase());
    });
  });
});

describe("filenameFrom", () => {
  it("should retrieve the filename from a filepath, url, etc.", () => {
    // Arrange
    [
      "C:\\test\\test.json",
      "https://test.test.com/test/test.json",
      "https://test.test.com/test/test.json?test=test&test2=4",
      "file:\\mobile\\test\\test.json",
    ].map((path) => {
      // Act
      const result = filenameFrom(path);

      // Assert
      expect(result).toBe("test.json");
    });
  });
});
