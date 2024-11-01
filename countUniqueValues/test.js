const countUniqueValues = require("./index.js")

describe('countUniqueValues function', () => {
  test('counts unique values in an array with duplicates', () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  });

  test('returns 0 for an empty array', () => {
    expect(countUniqueValues([])).toBe(0);
  });

  test('handles negative numbers correctly', () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });

  test('returns correct count for array with all unique values', () => {
    expect(countUniqueValues([1, 2, 3, 4, 5])).toBe(5);
  });

  test('returns 1 for array with all identical values', () => {
    expect(countUniqueValues([2, 2, 2, 2, 2])).toBe(1);
  });
});
