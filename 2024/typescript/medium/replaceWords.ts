function replaceWords(dictionary: string[], sentence: string): string {
  let wordsToFix = [];
  let splitted = sentence.split(" ");

  for (let i = 0; i < splitted.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (splitted[i].indexOf(dictionary[j]) === 0) {
        splitted[i] = dictionary[j];
      }
    }
  }

  let result = splitted.join(" ");

  return result;
}
