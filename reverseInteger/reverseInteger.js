var reverse = function(x) {
  let result = '';
  let isNegative = false;
  const maxInteger = 2147483647;
  const minInteger = -2147483648;
  if (x < 0) {
      isNegative = true;
  }
  if (x <= minInteger || x === 0 || x > maxInteger) {
      return 0;
  }
  const stringified = x.toString();
  for (let i = stringified.length - 1; i >= 0; i--) {
      result += stringified[i];
  }
  if (isNegative) {
      return -parseInt(result);
  } else {
      return parseInt(result);
  }
};

console.log(reverse(123))  // return 321
console.log(reverse(-123))  // return -321
console.log(reverse(120))  // return 21
console.log(reverse(0))  // return 0