// Problem: write a function that accepts a array of arrays and returns a new array with all values flattened

// Helper function

// function flatten(array) {
//   let result = [];
//   function getValues(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (Array.isArray(array[i])) {
//         getValues(array[i])
//       } else {
//         result.push(array[i]);
//       }
//     }
//   }
//   getValues(array);
//   return result;
// }

// Recursive function

function flatten(array) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]))
    } else {
      result.push(array[i]);
    }
  }
  return result;
}



console.log(flatten([1, 2, 3, [4, 5]])); // => [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // => [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // => [1, 2, 3]
console.log(flatten([[[1], [[[2]]], [[[[[[[3]]]]]]]]])); // => [1, 2, 3]