// Problem: search through a object with nested objects and return an array of all the strings found in the object

// Helper function

// function collectStrings(obj) {
//   let stringsArr = [];
//   function getStrings(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] === 'object') {
//         getStrings(obj[key])
//       } else if (typeof obj[key] === 'string') {
//         stringsArr.push(obj[key]);
//       }
//     }
//   }
//   getStrings(obj);
//   return stringsArr;
// }

// Recursive function

function collectStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      return result.concat(collectStrings(obj[key]))
    } else if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    }
  }
  return result;
}

const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj1)); // ['foor', 'bar', 'baz']