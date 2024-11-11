const isPalindrome = require("./index.js")

describe('isPalindrome', () => {
  test('returns false for a non-palindromic word', () => {
    expect(isPalindrome('awesome')).toBe(false);
  });

  test('returns false for another non-palindromic word', () => {
    expect(isPalindrome('foobar')).toBe(false);
  });

  test('returns true for a palindromic word', () => {
    expect(isPalindrome('tacocat')).toBe(true);
  });

  test('returns true for a complex palindrome', () => {
    expect(isPalindrome('amanaplanacanalpanama')).toBe(true);
  });

  test('returns false for a nearly-palindromic word', () => {
    expect(isPalindrome('amanaplanacanalpandemonium')).toBe(false);
  });

  test('returns true for a single character string', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });
});
