var allAnagrams = function (string) {
  // Create a array for storing the anagrams
  var anagramsArr = [];
  // Iterate through the string
  for (var i = 0; i < string.length; i++) {
    // Iterate through the string again
    for (var j = 0; j < string.length; j++) {
      // Compare if current letter (j) is equal to (i)
      if (string[j] === string[i]) {
        // Skip it if they are equal
        continue;
      }
      // Push each combination of characters into the result array
      for (var k = 0; k < string.length; k++) {
        // Compare if (k) is equal to (j) or (i)
        if ((string[k] === string[j]) || (string[k] === string[i])) {
          // If either are equal skip it
          continue;
        }
        // Push anagrams to anagrams array
        anagramsArr.push(string[i] + string[j] + string[k])
      }
    }
  }
  // Return the result array
  return anagramsArr;
};


var anagrams = allAnagrams('abc');
console.log(anagrams);