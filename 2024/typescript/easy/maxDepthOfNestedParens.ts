function maxDepth(s: string): number {
  let count = 0;
  let tempCount = 0;

  for (let char of s) {
    if (char === "(") {
      tempCount++;
      count = Math.max(tempCount, count);
      continue;
    }

    if (char === ")") {
      tempCount--;
    }
  }

  return count;
}
