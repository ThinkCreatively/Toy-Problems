function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
  let fractions: { combo: number[]; val: number }[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      fractions.push({
        combo: [arr[i], arr[j]],
        val: arr[i] / arr[j],
      });
    }
  }

  let sorted = fractions.sort((a, b) => a.val - b.val);

  return sorted[k - 1].combo;
}
