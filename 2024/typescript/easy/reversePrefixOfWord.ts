function reversePrefix(word: string, ch: string): string {
  let result: string[] = [];
  let splitted = word.split("");
  let idx;

  if (!splitted.includes(ch)) {
    return word;
  }

  for (let i = 0; i < splitted.length; i++) {
    if (word[i] !== ch) {
      result.push(word[i]);
    } else {
      result.push(word[i]);
      idx = i;
      break;
    }
  }

  result = result.reverse();
  result = result.concat(splitted.slice(idx + 1));

  return result.join("");
}
