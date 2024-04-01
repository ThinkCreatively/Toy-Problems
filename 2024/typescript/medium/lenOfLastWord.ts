function lengthOfLastWord(s: string): number {
  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      result++;
    }
    if (result > 0 && s[i] === " ") {
      break;
    }
  }

  return result;
}
