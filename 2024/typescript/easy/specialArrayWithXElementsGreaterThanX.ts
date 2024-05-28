function specialArray(nums: number[]): number {
  let sorted = nums.sort((a, b) => a - b);
  let count: number[] = [];

  for (let i = 1; i < sorted.length + 1; i++) {
    let tempCount = 0;
    let broke = false;

    for (let j = sorted.length - 1; j >= 0; j--) {
      if (sorted[j] >= i) {
        if (tempCount < i) {
          tempCount++;
        } else {
          tempCount = 0;
          broke = true;
          break;
        }
      } else {
        continue;
      }
    }

    if (!broke && tempCount === i) {
      count.push(i);
    } else {
      broke = false;
    }
  }

  return count.length ? count[count.length - 1] : -1;
}
