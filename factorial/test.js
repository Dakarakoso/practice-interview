const factorial = require('./index.js'); // Adjust the import based on the location of your function

describe('factorial', () => {
  test('calculates factorial(0) correctly', () => {
    expect(factorial(0)).toBe(1);
  });

  test('calculates factorial(1) correctly', () => {
    expect(factorial(1)).toBe(1);
  });

  test('calculates factorial(4) correctly', () => {
    expect(factorial(4)).toBe(24);
  });

  test('calculates factorial(5) correctly', () => {
    expect(factorial(5)).toBe(120);
  });

  test('calculates factorial(6) correctly', () => {
    expect(factorial(6)).toBe(720);
  });
});
