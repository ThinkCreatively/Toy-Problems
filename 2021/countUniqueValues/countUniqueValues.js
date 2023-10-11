// I'll be using the multiple pointers pattern

function countUniqueValues(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    let firstPointer = array[i];
    let secondPointer = array[i + 1];
    if (firstPointer !== secondPointer) {
      counter++;
      let temp = secondPointer;
      firstPointer = secondPointer;
      secondPointer = temp + 1;
    } else {
      continue;
    }
  }
  return counter;
}

console.log(countUniqueValues([1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4