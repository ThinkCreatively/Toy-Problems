const equivalentFoldedSums = (array) => {
  let outerSum = array[0] + array[array.length - 1];
  let innerSum = array[1] + array[array.length - 2];

  if (outerSum === innerSum) {
    return 0;
  } else {
    let change = outerSum - innerSum;
    array[1] -= change;
    return 1;
  }
}

console.log(equivalentFoldedSums([1, 4, 3, 5]));
