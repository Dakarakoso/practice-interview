/* Sliding Window - maxSubarraySum
Given an array of integers and a number, 
write a function called maxSubarraySum, which finds the 
maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from 
the original array. In the first example below, [100, 200, 300] 
is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1) */

/* function maxSubarraySum(arr, num){
    if(arr.length < num) return null;
    let max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++){
        let temp = 0;
        for(let y = 0; y < num; y++){
            temp += arr[i+y]
        }
        max = Math.max(temp, max)
    }
    return max;
} */

function maxSubarraySum(arr, num){
    if(arr.length < num) return null
    let max = 0
    let temp = 0
    for(let i =0; i < num; i++){
        max += arr[i]
    }
    temp = max
    for(let i= num; i < arr.length; i++){
        temp = temp - arr[i-num] + arr[i]
     max = Math.max(temp, max)
    }
    console.log(max, temp)
    return max;
}

module.exports = maxSubarraySum;