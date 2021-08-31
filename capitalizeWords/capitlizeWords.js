// Problem: write a recursive function that takes in a array of words and returns an array with all words capitilized

// Helper function

function capitalizeWords(array) {
  let result = [];
  function capitalize(array) {
    for(word of array) {
      word = word.toUpperCase();
      result.push(word);
      array.shift();
      capitalize(array)
    }
  }
  capitalize(array);
  return result;
}

// Recursive Function

// function capitalizeWords() {

// }

console.log(capitalizeWords(['i', 'am', 'practicing', 'recursion'])); // ['I', 'AM', 'PRACTICING', 'RECURSION']