const recursiveRange = require('./index.js');

describe('recursiveRange', () => {
  test('calculates recursiveRange(6) correctly', () => {
    expect(recursiveRange(6)).toBe(21); // 6 + 5 + 4 + 3 + 2 + 1 = 21
  });

  test('calculates recursiveRange(10) correctly', () => {
    expect(recursiveRange(10)).toBe(55); // 10 + 9 + 8 + ... + 1 = 55
  });

  test('calculates recursiveRange(0) correctly', () => {
    expect(recursiveRange(0)).toBe(0); // 0
  });

  test('calculates recursiveRange(1) correctly', () => {
    expect(recursiveRange(1)).toBe(1); // 1
  });

  test('calculates recursiveRange(5) correctly', () => {
    expect(recursiveRange(5)).toBe(15); // 5 + 4 + 3 + 2 + 1 = 15
  });
});
