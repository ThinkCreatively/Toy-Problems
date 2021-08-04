/*
~ Write a function that takes an unsigned integer and returns the number of '1' bits.
~ Must be length of 32
*/

function hammingWeight(n) {
  n = n.toString();
  if (n.length !== 32) {
    return 0;
  }
}

console.log(hammingWeight(00000000000000000000000000001011)); // return 3
console.log(hammingWeight(00000000000000000000000010000000)); // return 1
console.log(hammingWeight(11111111111111111111111111111101)); // return 31
console.log(hammingWeight(000)); // return 0 since length doesnt equal 32
console.log(hammingWeight(1)); // return 0 since length doesn't equal 32