function sortedSquares(nums: number[]): number[] {
  let result: number[] = [];

  for (let num of nums) {
    result.push(num * num);
  }

  result = result.sort((a, b) => a - b);

  return result;
}
