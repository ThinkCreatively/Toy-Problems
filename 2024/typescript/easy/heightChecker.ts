function heightChecker(heights: number[]): number {
  let sorted = heights.slice().sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) {
      result++;
    }
  }

  return result;
}
