/**
 Do not return anything, modify nums in-place instead.
 */
// function sortColors(nums: number[]): void {
//   nums = nums.sort((a, b) => a - b);
// }

// Attempted version without using sort
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let index = 0;
  let zeros = 0;
  let ones = 0;
  let twos = 0;

  for (let num of nums) {
    if (num === 0) zeros++;
    if (num === 1) ones++;
    if (num === 2) twos++;
  }

  while (index < nums.length) {
    for (let i = index; i < nums.length; i++) {
      let temp = nums[index];

      if (zeros && nums[i] === 0) {
        nums[index] = 0;
        nums[i] = temp;
        zeros--;
      }

      if (ones && nums[i] === 1) {
        nums[index] = 1;
        nums[i] = temp;
        ones--;
      }

      if (twos && nums[i] === 2) {
        nums[index] = 1;
        nums[i] = temp;
        twos--;
      }

      index++;
    }
  }
}
