const areThereDuplicates = require('./index.js'); 

describe("areThereDuplicates", () => {
    test("returns false when there are no duplicates", () => {
        expect(areThereDuplicates(1, 2, 3)).toBe(false);
        expect(areThereDuplicates('a', 'b', 'c')).toBe(false);
        expect(areThereDuplicates()).toBe(false); // No arguments case
    });

    test("returns true when there are duplicates", () => {
        expect(areThereDuplicates(1, 2, 2)).toBe(true);
        expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
    });

    test("handles cases with different data types correctly", () => {
        expect(areThereDuplicates(1, "1", 2)).toBe(false); // Distinguishes between numbers and strings
        expect(areThereDuplicates(1, "1", 1)).toBe(true);   // Detects duplicates in different types
    });

    test("works with large numbers of arguments", () => {
        expect(areThereDuplicates(...Array(10000).fill(1))).toBe(true); // Large input with all duplicates
        expect(areThereDuplicates(...Array(9999).fill(1), 2)).toBe(true); // Large input with some duplicates
        expect(areThereDuplicates(...Array.from({ length: 10000 }, (_, i) => i))).toBe(false); // No duplicates
    });
});
