// The problem: takes two strings and checks whether the characters in the first string form
// a subsequence of the characters in the second string (order matters)
// I'll be using the multple pointers pattern to solve

function isSubSequence(str1, str2) {
  str1 = str1.split('');
  str2 = str2.split('');
  let str1Pointer = 0;
  let str2Pointer = 0;
  for (let i = 0; i <= str2.length; i++) {
    if (str1.length === 0) {
      return true;
    }
    if (str1[str1Pointer] === str2[str2Pointer]) {
      str1.shift();
      str2Pointer++;
    } else {
      str2Pointer++;
      continue;
    }
  }
  return false;
}

console.log(isSubSequence('hello', 'hello world')); // True
console.log(isSubSequence('sing', 'sting')); // True
console.log(isSubSequence('abc', 'abracadrabra')); // True
console.log(isSubSequence('abc', 'acb')); // False