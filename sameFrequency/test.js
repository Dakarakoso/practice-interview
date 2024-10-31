const sameFrequency = require('./index.js'); // Import the function if in a separate file

describe("sameFrequency", () => {
    test("returns true for numbers with the same frequency of digits", () => {
        expect(sameFrequency(182, 281)).toBe(true);
        expect(sameFrequency(3589578, 5879385)).toBe(true);
    });

    test("returns false for numbers with different frequency of digits", () => {
        expect(sameFrequency(34, 14)).toBe(false);
        expect(sameFrequency(22, 222)).toBe(false);
    });

    test("returns true for single-digit numbers that are the same", () => {
        expect(sameFrequency(5, 5)).toBe(true);
    });

    test("returns false for single-digit numbers that are different", () => {
        expect(sameFrequency(5, 9)).toBe(false);
    });

    test("returns true for numbers with multiple identical digits", () => {
        expect(sameFrequency(112233, 321123)).toBe(true);
    });

    test("returns false for numbers with same digits but different frequencies", () => {
        expect(sameFrequency(112233, 321122)).toBe(false);
    });
});
