const groupAnagrams = (strs: string[]): string[][] => {
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
