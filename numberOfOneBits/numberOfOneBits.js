/*
~ Write a function that takes an unsigned integer and returns the number of '1' bits.
~ Must be length of 32
*/

function hammingWeight(n) {
  // Create result (number of 1 bits)
  let result = 0;
  console.log(n)
  // Change integer to String
  n = (n >>> 0).toString(2);
  console.log('after conversion: ', n)
  // Iterate through n
  for (let i = 0; i < n.length; i++) {
    // Count all 1's
    if (n[i] === '1') {
      result++;
    }
  }
  return result;
}

console.log(hammingWeight(00000000000000000000000000001011)); // return 3
console.log(hammingWeight(00000000000000000000000010000000)); // return 1
console.log(hammingWeight(11111111111111111111111111111101)); // return 31