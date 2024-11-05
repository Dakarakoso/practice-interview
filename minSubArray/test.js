const minSubArrayLen = require('./index.js'); // Adjust the path as necessary

describe("minSubArrayLen", () => {
  
  test("returns minimal length for contiguous subarray with sum >= target", () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2); // [4,3]
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2); // [5,4]
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1); // [62]
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3); // [16,22,5]
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5); // [16,22,5,7,8]
    expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2); // [8,3]
  });

  test("returns 0 when no subarray meets the target sum", () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
    expect(minSubArrayLen([1, 2, 3], 7)).toBe(0);
    expect(minSubArrayLen([], 7)).toBe(0);
  });

  test("returns correct length when the subarray is the entire array", () => {
    expect(minSubArrayLen([1, 2, 3, 4, 5], 15)).toBe(5); // entire array
  });

  test("handles single-element arrays that meet or don't meet the target sum", () => {
    expect(minSubArrayLen([10], 10)).toBe(1); // Single element meets target
    expect(minSubArrayLen([5], 10)).toBe(0);  // Single element does not meet target
  });
  
  test("returns correct length when multiple valid subarrays exist", () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2); // multiple [4,3] or [3,4]
  });
});
