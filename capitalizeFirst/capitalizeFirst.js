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

// function capitalizeFirst (array) {

// }

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']