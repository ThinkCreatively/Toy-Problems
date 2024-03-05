const chatGroupAnagrams = (strs: string[]): string[][] => {
  if (strs.length <= 1) return [strs];

  let anagrams = {};
  for (const word of strs) {
    const sortedWord = word.split("").sort().join("");
    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }

  return Object.values(anagrams);
};

// alternate Brute for solution
const myGroupAnagrams = (strs: string[]): string[][] => {
  if (strs.length <= 1) return [strs];

  let copy = strs;
  let result: string[][] = [];
  let group: string[] = [];
  let temp;

  for (let i = 0; i < copy.length; i++) {
    temp = copy[i].split("").sort();
    group.push(copy[i]);

    for (let j = i + 1; j < copy.length; j++) {
      let splitted = copy[j].split("").sort();
      if (temp.join("") === splitted.join("")) {
        group.push(copy[j]);
        copy.splice(j, 1);
        j--;
      }
    }

    copy.splice(i, 1);
    result.push(group);
    group = [];
    i--;
  }
  return result;
};
