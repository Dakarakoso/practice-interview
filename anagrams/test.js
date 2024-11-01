const isAnagram = require("./index.js")

describe('isAnagram function', () => {
  test('returns true for simple anagrams', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
  });

  test('returns false for non-anagrams', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
  });

  test('returns true for identical words', () => {
    expect(isAnagram('anagram', 'anagram')).toBe(true);
  });

  test('returns false if one string is empty', () => {
    expect(isAnagram('hello', '')).toBe(false);
  });

  test('works with numbers in strings', () => {
    expect(isAnagram('12345', '54321')).toBe(true);
    expect(isAnagram('12345', '12344')).toBe(false);
  });
});
