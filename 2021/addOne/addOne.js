/*
digits = a array that represents a integer so [1, 2, 3] = 123 as a number
Turn [1, 2, 3] into [1, 2, 4]
Turn [1, 2, 9] into [1, 3, 0]
Turn [9, 9, 9] into [1, 0, 0, 0]
*/

function addOne(digits) {
  digits = digits.join('');
  var toNumber = parseInt(digits);
  toNumber += 1;
  stringified = toNumber.toString(10);
  let result = stringified.split('').map(Number);
  return result;
}

