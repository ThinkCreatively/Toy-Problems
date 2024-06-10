function checkSubarraySum(nums: number[], k: number): boolean {
  if (nums.length < 2) return false;

  let size = 2;
  let window = 0;

  for (let i = 0; i < nums.length; i++) {
    window += nums[i];
  }

  if (window < k && window !== 0) return false;

  window = 0;

  for (let i = 0; i < size; i++) {
    window += nums[i];
  }

  while (size < nums.length + 1) {
    for (let i = size; i < nums.length + 1; i++) {
      if (window % k === 0 || window === 0) return true;
      window -= nums[i - size];
      window += nums[i];
    }

    size++;
    window = 0;

    for (let i = 0; i < size; i++) {
      window += nums[i];
    }
  }

  return false;
}
