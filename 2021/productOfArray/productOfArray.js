// Problem: using recursion return product of all integers in a array

function productOfArray(array) {
  if (array.length === 0) return 0;
  let firstVal = array[0];
  if (array.length === 1) return firstVal;
  array.shift();
  return firstVal *= productOfArray(array);
}

console.log(productOfArray([1, 2, 3])); // return 6
console.log(productOfArray([1, 2, 3, 10])); // return 60
console.log(productOfArray([])); // return 0