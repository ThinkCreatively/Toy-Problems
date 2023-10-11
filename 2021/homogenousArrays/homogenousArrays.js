/*
Given a two-dimensional array, return a new array which carries over only those arrays from the original,
which were not empty and whose items are all of the same type (i.e. homogenous).
For simplicity, the arrays inside the array will only contain characters and integers.
*/


function homogenousArrays(array) {
  // Edge Case of empty array
  if (array.length === 0) {
    return [];
  }
  // Create result to return
  let result = [];
  // Loop through input array
  for (let i = 0; i < array.length; i++) {
    // check that current value is an array
    if (Array.isArray(array[i]) === true) {
      // Check if empty
      if (array[i].length === 0) {
        // Add to result
        result.push(array[i])
      } else {
        let homogenous = array[i][0];
        let matches = 0;
        // Check if each value has same type as first value in the array
        for (let j = 0; j < array[i].length; j++) {
          if (typeof array[i][j] == typeof homogenous ) {
            // Matches increase
            matches++;
          }
        }
        if (matches === array[i].length) {
          // add current child to result
          result.push(array[i]);
        }
      }
    }
  }
  return result;
}

console.log(homogenousArrays([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])); // should return [[1, 5, 4], ['b']]
console.log(homogenousArrays([]));