function maxFrequencyElements(nums: number[]): number {
  let result = 0;
  let count = {};

  for (let num of nums) {
    count[num] ? count[num]++ : (count[num] = 1);
  }

  let entries: [string, number][] = Object.entries(count);
  let sorted = entries.sort((a, b) => b[1] - a[1]);
  let maxFreq = sorted[0][1];

  for (let num of sorted) {
    if (num[1] === maxFreq) {
      result += num[1];
    } else {
      break;
    }
  }

  return result;
}
