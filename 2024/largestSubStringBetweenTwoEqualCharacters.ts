function maxLengthBetweenEqualCharacters(s: string): number {
  let maxDistance = -1;

  for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j < s.length; j++) {
          if (s[i] === s[j]) {
              maxDistance = Math.max(maxDistance, j - i - 1);
          }
      }
  }

  return maxDistance;
};