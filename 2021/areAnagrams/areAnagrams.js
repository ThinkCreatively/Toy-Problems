// Frequency Counter Approach

function areAnagrams(str1, str2) {
  let str1Freq = {};
  let str2Freq = {};
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2) {
    return true;
  }
  for (let char of str1) {
    str1Freq[char] === undefined ? str1Freq[char] = 1 : str1Freq[char]++;
  }
  for (let char of str2) {
    str2Freq[char] === undefined ? str2Freq[char] = 1 : str2Freq[char]++;
  }
  for (let key in str1Freq) {
    if (str1Freq[key] !== str2Freq[key]) {
      return false;
    }
  }
  return true;
}

console.log(areAnagrams('aaz', 'zza')); // False
console.log(areAnagrams('anagram', 'nagaram')); // True
console.log(areAnagrams('', '')); // True
console.log(areAnagrams('rat', 'car')); // False
console.log(areAnagrams('awesome', 'awesom')); // False
console.log(areAnagrams('amanaplanacanalpanama', 'acanalmanplanpamana')); // False
console.log(areAnagrams('qwerty', 'qeywrt')); // True
console.log(areAnagrams('texttwisttime', 'timetwisttext')); // True