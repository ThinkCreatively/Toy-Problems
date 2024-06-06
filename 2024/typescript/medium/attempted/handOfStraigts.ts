function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) return false;
  let sorted = hand.sort((a, b) => a - b);
  let group = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    if (group.length === groupSize) {
      group = [];
      group.push(sorted[i]);
      i++;
    }

    if (sorted[i] === group[i - 1] + 1) {
      group.push(sorted[i]);
    } else {
      for (let j = i + 1; j < sorted.length; j++) {
        if (sorted[j] === group[group.length - 1] + 1) {
          group.push(sorted[j]);
          sorted.slice(j, 1);
          break;
        }

        if (sorted[j] > group[i - 1] + 1) {
          return false;
        }
      }
    }
    if (group.length === groupSize) {
      group = [];
    }
  }

  if (group.length === groupSize) {
    group = [];
  }

  if (group.length) return false;

  return true;
}
