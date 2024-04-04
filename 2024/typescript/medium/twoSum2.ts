function twoSum(numbers: number[], target: number): number[] {
  let result: number[] = [];
  let p1 = 0;
  let p2 = numbers.length - 1;

  while (p1 < p2) {
    if (numbers[p1] + numbers[p2] === target) {
      result.push(p1 + 1, p2 + 1);
      break;
    }

    if (numbers[p1] + numbers[p2] > target) {
      p2--;
      continue;
    }

    if (numbers[p1] + numbers[p2] < target) {
      p1++;
      continue;
    }
  }

  return result;
}
