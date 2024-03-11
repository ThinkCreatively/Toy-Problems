function customSortString(order: string, s: string): string {
  let result = "";
  let orderSet = new Set(order);
  let sVals = {};
  let extraChars = "";

  for (let char of s) {
    if (!orderSet.has(char)) {
      extraChars += char;
    }
  }

  for (let char of s) {
    sVals[char] ? sVals[char]++ : (sVals[char] = 1);
  }

  for (let char of order) {
    if (sVals[char]) {
      while (sVals[char]) {
        result += char;
        sVals[char]--;
      }
    }
  }

  return result + extraChars;
}
