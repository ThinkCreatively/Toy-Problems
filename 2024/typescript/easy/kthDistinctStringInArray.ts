function kthDistinct(arr: string[], k: number): string {
  let singleCount = {};
  let deleted = new Set();

  for (let val of arr) {
    if (!singleCount[val]) {
      if (deleted.has(val)) {
        continue;
      } else {
        singleCount[val] = 1;
      }
    } else {
      delete singleCount[val];
      deleted.add(val);
    }
  }

  let count = 1;
  let result = "";

  for (let key in singleCount) {
    if (count === k) {
      result = key;
      break;
    }

    count++;
  }

  return result;
}
