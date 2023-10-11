// Problem: given a object write a function that finds all numbers and turns them to strings


// Helper Function

function strigifyNumbers(obj) {

}

// Recursive Function

// function strigifyNumbers(obj) {
//   for(key in obj) {
//     if (typeof obj[key] === 'object') {
//       strigifyNumbers(obj[key]);
//     } else if (typeof obj[key] === 'number') {
//       obj[key] = obj[key].toString();
//     }
//   }
//   return obj;
// }

let obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

console.log(strigifyNumbers(obj1));

/* should return:
{
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66"
    }
  }
}
*/