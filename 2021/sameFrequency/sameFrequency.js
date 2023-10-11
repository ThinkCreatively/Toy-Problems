// This problem is looking to see if given two integers they have the same numbers inside and are used the same amount
// I'll be using a frequency approach for this

function sameFrequency(num1, num2) {
  let num1Freq = {};
  num1 = num1.toString();
  num2 = num2.toString();
  for (let i = 0; i < num1.length; i++) {
    let currentVal = num1[i];
    num1Freq[currentVal] === undefined ? num1Freq[currentVal] = 1 : num1Freq[currentVal]++;
  }
  for (let i = 0; i < num2.length; i++) {
    let currentVal = num2[i];
    if (!num1Freq[currentVal]) {
      return false;
    } else {
      num1Freq[currentVal]--;
    }
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false