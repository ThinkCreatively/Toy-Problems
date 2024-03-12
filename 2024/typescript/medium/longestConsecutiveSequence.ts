function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;
  let dupesRemoved = Array.from(new Set(nums)).sort((a, b) => a - b);
  let lastScene = dupesRemoved[0];
  let longestSeq = 1;
  let seq = 1;

  for (let num of dupesRemoved) {
    if (num === lastScene + 1) {
      seq++;
      lastScene = num;
    } else {
      seq > longestSeq ? (longestSeq = seq) : (longestSeq = longestSeq);
      lastScene = num;
      seq = 1;
    }
  }

  return Math.max(seq, longestSeq);
}
