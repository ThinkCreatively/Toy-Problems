function majorityElement(nums: number[]): number {
  let sorted = nums.sort((a, b) => a - b);
  let highest = 0;
  let count = 0;
  let temp = sorted[0];
  let result = 0;

  for (let num of sorted) {
    if (num === temp) {
      count++;
    } else {
      if (count > highest) {
        highest = count;
        result = temp;
      }

      temp = num;
      count = 1;
    }
  }

  if (count > highest) {
    result = temp;
  }

  return result;
}
