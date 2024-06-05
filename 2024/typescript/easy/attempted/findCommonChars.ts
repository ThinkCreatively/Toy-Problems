function commonChars(words: string[]): string[] {
  let count = {};

  for (let char of words[0]) {
    count[char] ? count[char]++ : (count[char] = 1);
  }

  for (let i = 1; i < words.length; i++) {
    let tempCount = {};
    for (let char of words[i]) {
      tempCount[char] ? tempCount[char]++ : (tempCount[char] = 1);
    }

    for (let key in count) {
      if (!tempCount[key]) {
        delete count[key];
      }

      if (tempCount[key] < count[key]) {
        count[key] -= tempCount[key];
      }
    }
  }

  let result: string[] = [];

  for (let key in count) {
    for (let i = 0; i < count[key]; i++) {
      result.push(key);
    }
  }

  return result;
}
