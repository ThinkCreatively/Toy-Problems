// Problem: Using recursion, reverse string

function reverse(str) {
  let result = '';
  function getLetter(str) {
    if (str === '') return
    str = str.split('');
    result += str[str.length - 1];
    str.pop();
    str = str.join('');
    getLetter(str);
  }
  getLetter(str);
  return result;
}

console.log(reverse('James')); // 'semaJ'
console.log(reverse('Hi')); // 'iH'
console.log(reverse('awesome')); // 'emosewa'