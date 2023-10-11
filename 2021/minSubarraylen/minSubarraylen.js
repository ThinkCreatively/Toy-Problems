// Problem: Given a array of positive integers and a positive integer
// find the minimal length of a contiguos subarray which the sum is greater
// than or equal to the interger passed in.
// I'll be using the sliding window approach for this

function minSubarraylen(array, num) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  while (start < array.length) {
    if (total < num && end < array.length) {
      total += array[end];
      end++;
    } else if (total >= num) {
      minLen = Math.min(minLen, end-start);
      total -= array[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}


console.log(minSubarraylen([2, 3, 1, 2, 4, 3], 7)); // returns 2 because [4, 3] is the smallest subarray
console.log(minSubarraylen([2, 1, 6, 5, 4], 9)); // returns 2 bc [5, 4]
console.log(minSubarraylen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // returns 1 because [62]
console.log(minSubarraylen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // returns 3
console.log(minSubarraylen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // returns 5
console.log(minSubarraylen([4, 3, 3, 8, 1, 2, 3], 11)); // returns 2
console.log(minSubarraylen([1, 4, 16, 22, 5, 7, 8, 9, 19] , 95)); // returns 0