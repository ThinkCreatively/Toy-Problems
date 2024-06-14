function minIncrementForUnique(nums: number[]): number {
  let sorted = nums.sort((a, b) => a - b);
  let moves = 0;

  for (let i = 1; i < sorted.length; i++) {
    while (sorted[i] <= sorted[i - 1]) {
      sorted[i]++;
      moves++;
    }
  }

  return moves;
}
