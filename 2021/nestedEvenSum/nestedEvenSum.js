// Problem: Write a function that returns the sum of all even numbers in a object which may contain nested objects.


// Helper Function

// function nestedEvenSum(obj) {
//   let result = 0;
//   function getEvens(obj) {
//     for (key in obj) {
//       if (typeof obj[key] === 'number') {
//         if (obj[key] % 2 === 0) {
//           result += obj[key];
//         }
//       } else if (typeof obj[key] === 'object') {
//         getEvens(obj[key]);
//       } else {
//         return;
//       }
//     }
//   }
//   getEvens(obj)
//   return result;
// }

// Recursive Function

function nestedEvenSum(obj) {
  let result = 0;
  for (key in obj) {
    if (typeof obj[key] === 'number') {
      if (obj[key] % 2 === 0) {
        result += obj[key];
      }
    } else if (typeof obj[key] === 'object') {
      return result += nestedEvenSum(obj[key]);
    } else {
      return result;
    }
  }
}

function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

// Test Cases

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)) // 6
console.log(nestedEvenSum(obj2)) // 10