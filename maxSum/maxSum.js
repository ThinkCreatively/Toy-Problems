// In this problem I will be using the sliding window pattern
// The problem is to find the largest sum made of three integers that are next to each other in the given array

function maxSum(array, num) {
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let j = num; j < array.length; j++) {
    tempSum += array[j] - array[j - num];
    tempSum > maxSum ? maxSum = tempSum : maxSum = maxSum;
  }
  return maxSum;
}

console.log(maxSum([1, 2, 3, 4, 5, 5, 6, 7, 1, 3, 8], 3)); // 18
console.log(maxSum([1, 2, 3, 4, 5, 5, 6, 7, 1, 3, 8], 2)); // 13
console.log(maxSum([1, 2, 3, 4, 5, 5, 6, 7, 1, 3, 8], 4)); // 23
console.log(maxSum([1, 2, 3, 4, 5, 6, 4, 4, 7], 2)); // 11