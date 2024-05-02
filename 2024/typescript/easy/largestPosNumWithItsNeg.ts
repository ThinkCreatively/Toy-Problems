function findMaxK(nums: number[]): number {
  let sorted = nums.sort((a, b) => a - b);
  let positives: number[] = [];
  let negatives: number[] = [];

  for (let num of sorted) {
    num < 0 ? negatives.push(num) : positives.push(num);
  }

  for (let i = positives.length - 1; i > -1; i--) {
    if (negatives.includes(positives[i] * -1)) {
      return positives[i];
    }
  }

  return -1;
}
