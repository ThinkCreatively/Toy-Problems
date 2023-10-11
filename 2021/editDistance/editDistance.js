// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string,
// given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  // Count Variable, what we are returning
  let operationCount = 0;
  // Split str1 and str2 into arrays
  let firstStringSplitted;
  // Compare lengths, if str2 shorter than str1 one delete indexes that are longer than str2
  if (str1.length > str2.length) {
    let shortendString = str1.slice(0, (str2.length - str1.length))
    firstStringSplitted = shortendString.split('');
    operationCount += Math.abs(str2.length - str1.length);
  }
  if (firstStringSplitted === undefined) {
    firstStringSplitted = str1.split('');
  }
  let secondStringSplitted = str2.split('');
  // iterate through str1
  for (var i = 0; i < firstStringSplitted.length; i++) {
    // compare values at index replacing each one with str2 values or adding if str2 is longer than str1
    if (firstStringSplitted[i] === undefined) {
      firstStringSplitted[i].push(secondStringSplitted[i])
      // Increment due to insertion
      operationCount++;
    } else if (firstStringSplitted[i] !== secondStringSplitted[i]) {
      firstStringSplitted[i] = secondStringSplitted[i]
      // Increment count due to replacement
      operationCount++;
    } else {
      continue;
    }
  }
  return operationCount;
}

console.log(editDistance('doggy', 'god'));
