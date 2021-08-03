/*
Given two integer arrays a, b, both of length >= 1,
create a program that returns true if the sum of the squares of each element in a is strictly greater
than the sum of the cubes of each element in b.
*/

function arrayMadness(a, b) {
  // Create result variable to compare later
  let sumOfASquares = 0;
  let sumOfBSquares = 0;
  // Edge case where either array is empty
  if (a.length === 0) {
    return false;
  }
  if (b.length === 0) {
    return true;
  }
  // Iterate over each array
  for (let i = 0; i < a.length; i++) {
    // Square each value and add it to the appropiate sum
    sumOfASquares += a[i] ** 2;
    sumOfBSquares += b[i] ** 2;
  }
  if (sumOfASquares > sumOfBSquares) {
    return true;
  } else {
    return false;
  }
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3])); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
console.log(arrayMadness([4, 5], [9, 2, 3])); // return false
console.log(arrayMadness([2, 2, 2, 2], [9, 9, 3])); // return false
console.log(arrayMadness([], [9, 9, 3])); // return false
console.log(arrayMadness([2, 2, 2, 2], []));