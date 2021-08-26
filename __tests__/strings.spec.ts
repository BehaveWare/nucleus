import {
  capitalize,
  filenameFrom,
  isEmail,
  isInteger,
  isPhoneNumber,
} from "../src";

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

describe("isInteger", () => {
  it("should determine non-integers are just that", () => {
    // Arrange
    ["not", "an", "int", "1.45", ".567", "1abc", "./1/."].map(
      (notInt) => {
        // Act
        const result = isInteger(notInt);

        //Assert
        expect(result).toBe(false);
      },
    );
  });

  it("should determine integers are just that", () => {
    // Arrange
    ["1", "12355643567", "109389303", "88"].map((int) => {
      // Act
      const result = isInteger(int);

      // Assert
      expect(result).toBe(true);
    });
  });
});

describe("isEmail", () => {
  it("should determine non-emails are just that", () => {
    // Arrange
    ["not.an.email", "not an email", "nope", ".....@gmail.com"].map(
      (nonEmail) => {
        // Act
        const result = isEmail(nonEmail);

        // Assert
        expect(result).toBe(false);
      },
    );
  });

  it("should determine emails are just that", () => {
    // Arrange
    ["test@test.com", "mike@test.com", "chuck@chuckychuck.chuck"].map(
      (email) => {
        // Act
        const result = isEmail(email);

        // Assert
        expect(result).toBe(true);
      },
    );
  });
});

describe("isPhoneNumber", () => {
  it("should determine non-phone numbers are just that", () => {
    // Arrange
    [
      "not a number",
      "999000111999333999399",
      "111-999",
      "111 111 222",
    ].map((nonNumber) => {
      // Act
      const result = isPhoneNumber(nonNumber);

      // Assert
      expect(result).toBe(false);
    });
  });

  it("should determine phone numbers are just that", () => {
    // Arrange
    [
      "555-555-5555",
      "555 555 5555",
      "(555)555-5555",
      "5555555555",
      "555.555.5555",
      "(555) 555-5555",
      "(555) 555 5555",
    ].map((phoneNumber) => {
      // Act
      const result = isPhoneNumber(phoneNumber);

      // Assert
      expect(result).toBe(true);
    });
  });
});
