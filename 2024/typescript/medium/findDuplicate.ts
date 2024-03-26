function findDuplicate(nums: number[]): number {
  let count = {};

  for (let num of nums) {
    count[num] ? count[num]++ : (count[num] = 1);
  }

  for (let key in count) {
    if (count[key] > 1) {
      return Number(key);
    }
  }

  return -1;
}
