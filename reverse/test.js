const reverse = require('./index.js')

describe('reverse', () => {
    test('reverses a single word', () => {
      expect(reverse('hello')).toBe('olleh');
    });
  
    test('reverses a sentence', () => {
      expect(reverse('hello world')).toBe('dlrow olleh');
    });
  
    test('returns an empty string when input is empty', () => {
      expect(reverse('')).toBe('');
    });
  
    test('reverses a string with special characters', () => {
      expect(reverse('!@#123abc')).toBe('cba321#@!');
    });
  
    test('reverses a single character string', () => {
      expect(reverse('a')).toBe('a');
    });
  
    test('reverses a palindrome correctly', () => {
      expect(reverse('madam')).toBe('madam');
    });
  });