// Problem: Detect if input string is a palindrome

// Using recursion:

// Helper Function

function isPalindrome(str) {
  let result = '';
  let check = str;
  function addToResult(str) {
    if (str.length === 0) return;
    str = str.split('');
    result += str[str.length - 1];
    str.pop();
    str = str.join('');
    addToResult(str);
  }
  addToResult(str);
  if (result === str) {
    return true;
  } else {
    return false;
  }
}

// Recursive Function

function isPalindrome(str) {
  let check = str;
  if (str.length === check.length * 2) {
    if (str === check.split('').reverse().join('')) {
      return true;
    } else {
      return false;
    }
  }
  str = str.split('');
  str.push(str[str.length - 2]);
  str.splice(str.length - 3, 1);
  str = str.join('');
  return isPalindrome(str);
}

console.log(isPalindrome('awesome')); // False
// console.log(isPalindrome('foobar')); // False
// console.log(isPalindrome('tacocat')); // True
// console.log(isPalindrome('racecar')); // True