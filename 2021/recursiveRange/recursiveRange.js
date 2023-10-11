// Problem: using recurison return the sum of all numbers from 0 to input num

function recursiveRange(num) {
  if (num === 0) return num;
  return num += recursiveRange(num - 1);
}

console.log(recursiveRange(6)); // return 21
console.log(recursiveRange(10)); // return 55