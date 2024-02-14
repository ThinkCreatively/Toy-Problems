function firstPalindrome(words: string[]): string {
  let result = "";
  for (let word of words) {
      if (word === word.split("").reverse().join("")) {
          result = word;
          break;
      }
  }

  return result;
};