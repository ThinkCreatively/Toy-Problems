function firstMissingPositive(nums: number[]): number {
  let sorted = nums.sort((a, b) => a - b);
  let lowest = 1;
  if (nums[nums.length - 1] < 0) {
    return lowest;
  }

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] < 0) {
      sorted.shift();
      i--;
    } else {
      break;
    }
  }

  if (nums[0] > 1) {
    return 1;
  }

  let lastScene = sorted[0];
  let broke = false;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] < 0) continue;

    if (sorted[i] > lastScene + 1) {
      lowest = lastScene + 1;
      broke = true;
      break;
    } else {
      lastScene = sorted[i];
    }
  }

  if (broke) {
    return lowest;
  }

  return sorted[sorted.length - 1] + 1;
}
