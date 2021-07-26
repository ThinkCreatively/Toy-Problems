/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

/*
Input: Array of numbers
Output: First Number to show up even amount of times
Constraints:
Edge Cases: When no number shows up even amount of times
*/

var evenOccurrence = function(arr) {
  // Edge case is when there is no value that returns even times, return null
  var result = null;
  // Create a obj to hold each values occurance in (key = number, value = number of occurances)
  var occuranceObj = {};
  // Iterate through input array
  for (var i = 0; i < arr.length; i++) {
    console.log('Array values: ' + arr[i])
    // If number isn't a key in obj, instantiate it to 1
    if (occuranceObj[arr[i]] === undefined) {
      var key = arr[i];
      var value = [1, i];
      occuranceObj[key] = value;
    } else {
      // Else it is already in the obj increment by one
      // Update value of tuple
      occuranceObj[arr[i]][0]++;
    }
  }
  console.log(occuranceObj);
  // Iterate through obj
  for (var key in occuranceObj) {
    // If value of key occurs even amount of time
    if (occuranceObj[key] / 2 === 0) {
    // Set result to equal that value
      result = occuranceObj[key];
    }
  }
  // Return result
  return result;
};

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4