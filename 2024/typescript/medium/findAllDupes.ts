function findDuplicates(nums: number[]): number[] {
  if (nums.length === 1) return [];

  let count = {};
  let dups: number[] = [];

  for (let num of nums) {
    count[num] ? count[num]++ : (count[num] = 1);
  }

  for (let key in count) {
    if (count[key] > 1) {
      dups.push(Number(key));
    }
  }

  return dups;
}
