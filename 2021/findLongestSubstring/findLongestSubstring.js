// Problem: To find the longest substring of all distinct characters and return the length of it
// I'll be using the sliding window approach

function findLongestSubstring(string) {
  let seen = {};
  let start = 0;
  let longest = 0;
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    if (seen[currentChar]) {
      start = Math.max(start, seen[currentChar]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[currentChar] = i + 1;
  }
  return longest;
}

// console.log(findLongestSubstring('')); // return 0
console.log(findLongestSubstring('rithmschool')); // return 7
// console.log(findLongestSubstring('thisisawesome')); // return 6
// console.log(findLongestSubstring('thecatinthehat')); // return 7
// console.log(findLongestSubstring('bbbbbbb')); // return 1
// console.log(findLongestSubstring('longestsubstring')); // return 8
// console.log(findLongestSubstring('thisishowwedoit')); // return 6