// The problem: write a function that takes in a array, and a number. Given the number find the largest sum you can with a n amount
// of values. EX: function([1, 2, 3, 4],2) returns 7
// I'll be using the sliding window pattern for this question

function maxSubarraySum(array, num) {
  if (array.length < num) {
    return null;
  }
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  let tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum += array[i] - array[i - num];
    tempSum > maxSum ? maxSum = tempSum : maxSum = maxSum;
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // Returns 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Returns 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // Returns 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // Returns 5
console.log(maxSubarraySum([2, 3], 3)); // Returns null