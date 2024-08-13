function combinationSum2(candidates: number[], target: number): number[][] {
  let windowSize = candidates.length;
  let window = 0;
  let groups: number[][] = [];
  let group: number[] = [];

  while (windowSize !== 0) {
    for (let i = 0; i < windowSize; i++) {
      window += candidates[i];
      group.push(candidates[i]);
    }

    if (window === target) {
      groups.push(group);
    }
  }

  return groups;
}
