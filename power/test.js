const power = require("./index.js")

describe('power', () => {
    test('calculates power(2, 0) correctly', () => {
      expect(power(2, 0)).toBe(1);
    });
  
    test('calculates power(2, 2) correctly', () => {
      expect(power(2, 2)).toBe(4);
    });
  
    test('calculates power(2, 4) correctly', () => {
      expect(power(2, 4)).toBe(16);
    });
  });