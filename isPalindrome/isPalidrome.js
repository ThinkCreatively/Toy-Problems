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
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false;
}

console.log(isPalindrome('awesome')); // False
console.log(isPalindrome('foobar')); // False
console.log(isPalindrome('tacocat')); // True
console.log(isPalindrome('racecar')); // True