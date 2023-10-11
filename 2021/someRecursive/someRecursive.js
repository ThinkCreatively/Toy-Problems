// Problem: write a function that accepts a array and a callback function, the function returns true if a single value in the
// array returns true when passed to the callback, otherwise return false

const isOdd = num => {
  return num % 2 !== 0;
}

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) {
    return true;
  } else {
    array.shift();
    return someRecursive(array, callback);
  }
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false