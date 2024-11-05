const productOfArray = require('./index.js'); // Adjust the import based on the location of your function

describe('productOfArray', () => {
  test('calculates productOfArray([1, 2, 3]) correctly', () => {
    expect(productOfArray([1, 2, 3])).toBe(6);
  });

  test('calculates productOfArray([1, 2, 3, 10]) correctly', () => {
    expect(productOfArray([1, 2, 3, 10])).toBe(60);
  });

  test('calculates productOfArray([5]) correctly', () => {
    expect(productOfArray([5])).toBe(5);
  });

  test('calculates productOfArray([]) correctly', () => {
    expect(productOfArray([])).toBe(1);
  });

  test('calculates productOfArray([1, 4, 3]) correctly', () => {
    expect(productOfArray([1, 4, 3])).toBe(12);
  });
});
