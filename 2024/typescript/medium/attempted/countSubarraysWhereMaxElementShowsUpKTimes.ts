function countSubarrays(nums: number[], k: number): number {
  let result = 0;
  let count = {};

  for (let num of nums) {
    count[num] ? count[num]++ : (count[num] = 1);
  }

  let sorted = nums.sort((a, b) => a - b);
  let highest = sorted[sorted.length - 1];

  if (count[highest] < k) {
    return result;
  } else {
    result++;
  }

  let windowSize = k;
  let windowCount = 0;
  let highCount = 0;
  let p1 = 0;
  let startInd = 1;

  const hardReset = () => {
    p1 = 0;
    highCount = 0;
    startInd = 1;
    windowCount = 0;
    windowSize++;
    return;
  };

  const softReset = () => {
    highCount = 0;
    windowCount = 0;
    p1 = startInd;
    startInd++;
    return;
  };

  while (windowSize < nums.length) {
    if (p1 === nums.length) {
      if (windowCount !== windowSize) {
        hardReset();
        continue;
      }
      if (highCount === k) result++;
      hardReset();
      continue;
    }

    if (windowCount < windowSize) {
      if (nums[p1] === highest) highCount++;
      windowCount++;
      p1++;
    } else if (highCount === k) {
      result++;
      softReset();
    } else {
      softReset();
    }
  }

  return result;
}
