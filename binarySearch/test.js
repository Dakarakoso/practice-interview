const binarySearch = require('./index.js'); // Adjust the path if necessary

describe("binarySearch", () => {
  test("should return the correct index when the value exists in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)).toBe(2);
    expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)).toBe(16);
  });

  test("should return -1 when the value does not exist in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)).toBe(-1);
  });

  test("should return -1 for an empty array", () => {
    expect(binarySearch([], 10)).toBe(-1);
  });
});
