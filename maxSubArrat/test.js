const maxSubarraySum = require('./index.js'); // Adjust the path as necessary

describe("maxSubarraySum", () => {
  
  test("returns maximum sum for a subarray of the given length", () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
  });

  test("returns null if subarray length is greater than the array length", () => {
    expect(maxSubarraySum([2, 3], 3)).toBe(null);
  });

  test("returns the correct sum when all elements are negative", () => {
    expect(maxSubarraySum([-2, -1, -3, -4, -6], 2)).toBe(-3);
  });

  test("returns the only element if the subarray length is 1", () => {
    expect(maxSubarraySum([5], 1)).toBe(5);
    expect(maxSubarraySum([-5], 1)).toBe(-5);
  });

  test("returns null for an empty array", () => {
    expect(maxSubarraySum([], 2)).toBe(null);
  });

  test("handles case with all zeros", () => {
    expect(maxSubarraySum([0, 0, 0, 0], 2)).toBe(0);
  });
});
