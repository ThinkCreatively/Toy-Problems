// Problem: Write function that takes a array of strings and returns an array of strings with each strings first character capitalized

// Helper Function

function capitalizeFirst (array) {
  let result = [];
  function capitalize(string) {
    string = string.split('');
    string[0] = string[0].toUpperCase();
    string = string.join('');
    result.push(string);
  }
  for (let i = 0; i < array.length; i++) {
    capitalize(array[i]);
  }
  return result;
}

// Recursive Function

function capitalizeFirst(array) {
  let result = [];
  if (array.length === 0) return result;
  array[0] = array[0].split('');
  array[0][0] = array[0][0].toUpperCase();
  array[0] = array[0].join('');
  result.push(array[0]);
  return result.concat(capitalizeFirst(array.slice(1)))
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']