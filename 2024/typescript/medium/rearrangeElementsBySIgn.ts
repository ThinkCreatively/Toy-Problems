function rearrangeArray(nums: number[]): number[] {
  let positives: number[] = [];
  let negatives: number[] = [];
  let result: number[] = [];

  for (let num of nums) {
    if (num > 0) {
      positives.push(num);
    } else {
      negatives.push(num);
    }
  }

  for (let i = 0; i < nums.length / 2; i++) {
    result.push(positives[i]);
    result.push(negatives[i]);
  }

  return result;
}
