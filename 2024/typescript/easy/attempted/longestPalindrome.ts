function longestPalindrome(s: string): number {
  if (s.length === 1) return 1;
  let reverse = s.split("").reverse().join("");

  if (reverse === s) return s.length;

  let count = {};

  for (let char of s) {
    count[char] ? count[char]++ : (count[char] = 1);
  }

  let length = 0;
  let gotOne = false;

  for (let key in count) {
    if (count[key] === 1 && !gotOne) {
      length += count[key];
      gotOne = true;
    } else if (count[key] > 2 && count[key] % 2 !== 0) {
      let result = Math.floor(count[key] / 2);
      if (result % 2 !== 0) {
        length += 2 * result;
      } else {
        length += 2 * result;
      }
    } else if (count[key] % 2 === 0) {
      length += count[key];
    }
  }

  return length;
}

// 1st attempt
// function longestPalindrome(s: string): number {
//   if (s.length === 1) return 1;

//   let count = {};

//   for (let char of s) {
//     count[char] ? count[char]++ : (count[char] = 1);
//   }

//   let values: number[] = Object.values(count);

//   if (values.length === 1) {
//     return values[0];
//   }

//   let length = 0;
//   let gotOne = false;

//   for (let key in count) {
//     if (count[key] === 1 && !gotOne) {
//       length += count[key];
//       gotOne = true;
//     } else if (count[key] === 3) {
//       length += 2;
//     } else if (count[key] > 2 && count[key] % 2 !== 0) {
//       let result = Math.floor(count[key] / 2);
//       if (result % 2 !== 0) {
//         length += 2 * result - 1;
//       } else {
//         length += 2 * result;
//       }
//     } else if (count[key] % 2 === 0) {
//       length += count[key];
//     }
//   }

//   return length;
// }
