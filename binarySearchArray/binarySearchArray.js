/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

// var binarySearch = function (array, target, small = array[0], large = array.length) {
//   // Check if target is in array, if not return null
//   if (array.indexOf(target) === -1) {
//     return null;
//   }
//   // Create three pointers small, large
//   var small = array[0];
//   var large = array.length;
//   var middle = 1 + Math.floor((small + large) / 2);
//   // If middle is target return middle
//   if (target === middle) {
//     return middle;
//   }
//   // Check if target is larger or smaller than middle
//   if (target < middle) {
//     array.splice(middle, array.length)
//     large = array.length;
//     return binarySearch(array, target, small, large);
//   }
//   if (target > middle) {
//     array.splice(array[0], middle)
//     small = middle;
//     return binarySearch(array, target, small, large)
//   }
// };

function binarySearch(array, value) {
  if (array.indexOf(value) === -1) return -1;
  let first = 0;
  let last = array.length - 1;
  let middle = Math.floor((first + last) / 2);
  while (array[middle] !== value && first < last) {
    if (array[middle] === value) {
      return middle;
    }
    if (array[middle] < value) {
      first = middle + 1;
    }
    if (array[middle] > value) {
      last = middle - 1;
    }
    middle = Math.floor((first + last) / 2);
  }
  if (array[middle] === value) return middle;
}


console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2

console.log(binarySearch([1, 2, 3, 4, 5], 8)); // -1

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 6)); // 5