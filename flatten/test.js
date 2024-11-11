const flatten = require('./index.js'); // Adjust path if needed

describe('flatten', () => {
  test('should return a flat array for a simple nested array', () => {
    expect(flatten([1, 2, [3, 4], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return a flat array for deeply nested arrays', () => {
    expect(flatten([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return a flat array for arrays with multiple levels of nesting', () => {
    expect(flatten([1, [2, 3, [4, 5], 6], [7, 8], 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should return an empty array if the input is an empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  test('should handle arrays with no nesting', () => {
    expect(flatten([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an array with empty arrays inside', () => {
    expect(flatten([1, [], [2, [], [3, 4], []], 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
