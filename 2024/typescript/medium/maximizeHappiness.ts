function maximumHappinessSum(happiness: number[], k: number): number {
  const sorted = happiness.sort((a, b) => b - a).slice(0, k);
  let result = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] - i < 0) {
      result += 0;
    } else {
      result += sorted[i] - i;
    }
  }

  return result;
}
