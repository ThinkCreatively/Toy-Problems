function findRelativeRanks(score: number[]): string[] {
  let sorted = score.slice().sort((a, b) => b - a);
  let ranks = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  let result: string[] = [];

  for (let i = 0; i < score.length; i++) {
    let index = sorted.indexOf(score[i]);

    if (ranks[index]) {
      result.push(ranks[index]);
    } else {
      result.push(`${index + 1}`);
    }
  }

  return result;
}
