function uniqueOccurrences(arr: number[]): boolean {
  let count = {};
  let countsCount = {};

  for (let num of arr) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  let values: number[] = Object.values(count);

  for (let num of values) {
    if (countsCount[num]) {
      return false;
    } else {
      countsCount[num] = 1;
    }
  }

  return true;
}
