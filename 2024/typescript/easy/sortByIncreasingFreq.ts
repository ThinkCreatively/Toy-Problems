function frequencySort(nums: number[]): number[] {
  let count = {};

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] ? count[nums[i]]++ : (count[nums[i]] = 1);
  }

  nums.sort((a, b) => {
    const frequencyA = count[a];
    const frequencyB = count[b];

    if (frequencyA === frequencyB) {
      return b - a;
    }

    return frequencyA - frequencyB;
  });

  return nums;
}
