function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length === 1) return nums;
  let result: number[] = [];
  let count = {};

  for (let num of nums) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  let entries: [string | number, number][] = Object.entries(count);
  let sorted = entries.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sorted.length; i++) {
    if (result.length === k) break;

    result.push(Number(sorted[i][0]));
  }

  return result;
}
