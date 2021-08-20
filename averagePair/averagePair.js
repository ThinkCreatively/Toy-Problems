// The problem is: Given a array of sorted integers and a target average, determine if theres a pairs of values
// where the average of the pair eqauls the target average
// I'll be using the multiple pointers approach

function averagePair(array, targetAverage) {
  if (array.length === 0) return false;
  let firstPointer = 0;
  let secondPointer = 1;
  while (secondPointer !== array.length) {
    if ((array[firstPointer] + array[secondPointer]) / 2 === targetAverage) {
      return true;
    }
    if (secondPointer === array.length - 1) {
      firstPointer++;
      secondPointer = firstPointer + 1;
    } else {
      secondPointer++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // True
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // True
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // False
console.log(averagePair([], 4)); // False

