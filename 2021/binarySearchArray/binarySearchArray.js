// Problem: Implement binary search

function binarySearch(array, value) {
  let first = 0;
  let last = array.length - 1;
  let middle = Math.floor((first + last) / 2);
  while (array[middle] !== value && first < last) {
    if (array[middle] === value) return middle;
    if (array[middle] < value) first = middle + 1;
    if (array[middle] > value) last = middle - 1;
    middle = Math.floor((first + last) / 2);
  }
  return array[middle] === value ? middle : -1;
}


console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2

console.log(binarySearch([1, 2, 3, 4, 5], 8)); // -1

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 6)); // 5