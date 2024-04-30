function wonderfulSubstrings(word: string): number {
  let splitted = word.split("");
  let result = splitted.length;
  if (word.length === 3) return result + 1;

  let count = {};

  for (let i = 0; i < splitted.length; i++) {
    let temp = "";
    temp += splitted[i];
    count[splitted[i]] ? count[splitted[i]]++ : (count[splitted[i]] = 1);

    for (let j = i + 1; j < splitted.length; j++) {
      if (count[splitted[j]]) {
        temp += splitted[j];
        count[splitted[j]]++;
      } else {
        count[splitted[j]] = 1;
      }
    }
  }

  return result;
}
