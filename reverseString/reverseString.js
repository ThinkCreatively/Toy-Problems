// Problem: Using recursion, reverse string

// function reverse(str) {
//   let result = '';
//   function getLetter(str) {
//     if (str === '') return
//     str = str.split('');
//     result += str[str.length - 1];
//     str.pop();
//     str = str.join('');
//     getLetter(str);
//   }
//   getLetter(str);
//   return result;
// }

function reverse(str, result) {
  if (str.length === 1) {
    result += str;
    return result;
  };
  str = str.split('');
  result += str[str.length - 1];
  str.pop();
  str = str.join('');
  return reverse(str, result);
}


console.log(reverse('James', '')); // 'semaJ'
console.log(reverse('Hi', '')); // 'iH'
console.log(reverse('awesome', '')); // 'emosewa'