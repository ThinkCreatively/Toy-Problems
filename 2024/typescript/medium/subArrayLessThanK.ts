function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;
  let window = 1;
  let i = -1;
  let j = 0;
  let result = 0;

  while (i < nums.length) {
    while (window < k) {
      i++;
      result += i - j;
      window *= nums[i];
    }

    while (window >= k) {
      window /= nums[j];
      j++;
    }
  }

  return result;
}
