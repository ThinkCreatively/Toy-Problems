function sortArray(nums: number[]): number[] {
  let p1 = 0;

  while (p1 !== nums.length - 1) {
    for (let i = p1 + 1; i < nums.length; i++) {
      if (nums[i] < nums[p1]) {
        let temp = nums[p1];
        nums[p1] = nums[i];
        nums[i] = temp;
      }
    }
    p1++;
  }

  return nums;
}
