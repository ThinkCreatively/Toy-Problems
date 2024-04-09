function partitionString(s: string): number {
  let subs = 0;
  let temp = new Set();

  for (let char of s) {
    if (!temp.has(char)) {
      temp.add(char);
    } else {
      subs++;
      temp = new Set();
      temp.add(char);
    }
  }

  subs++;

  return subs;
}
