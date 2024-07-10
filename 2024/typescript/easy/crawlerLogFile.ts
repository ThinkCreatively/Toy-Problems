function minOperations(logs: string[]): number {
  let count = 0;

  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === "../") {
      if (count > 0) {
        count--;
      }
    } else if (logs[i] === "./") {
      continue;
    } else {
      count++;
    }
  }

  return count;
}
