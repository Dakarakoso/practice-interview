const someRecursive = require('./index.js'); 

describe('someRecursive', () => {
  // Helper callback to check if a number is odd
  const isOdd = val => val % 2 !== 0;

  test('should return true if any element in the array passes the callback test', () => {
    expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true);
    expect(someRecursive([2, 4, 6, 8, 9], isOdd)).toBe(true);
  });

  test('should return false if no elements in the array pass the callback test', () => {
    expect(someRecursive([2, 4, 6, 8], isOdd)).toBe(false);
    expect(someRecursive([], isOdd)).toBe(false); // Empty array edge case
  });

  test('should handle arrays with only one element', () => {
    expect(someRecursive([1], isOdd)).toBe(true);
    expect(someRecursive([2], isOdd)).toBe(false);
  });

  test('should handle a custom callback', () => {
    const greaterThanTen = val => val > 10;
    expect(someRecursive([1, 2, 3, 11], greaterThanTen)).toBe(true);
    expect(someRecursive([1, 2, 3, 4], greaterThanTen)).toBe(false);
  });
});
