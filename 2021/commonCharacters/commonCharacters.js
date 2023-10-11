/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



 var commonCharacters = function (string1, string2) {
  var resultLetters = '';
  var allStrings = '';
  for (var i = 1; i < arguments.length; i++) {
    allStrings += arguments[i];
  }
  for (var i = 0; i < string1.length; i++) {
    if (allStrings.indexOf(string1[i]) !== -1 && !resultLetters.includes(string1[i])) {
      resultLetters += string1[i];
    }
  }
  return resultLetters;

};

console.log(commonCharacters('acexivou', 'aegihobu', 'james', 'xv'))