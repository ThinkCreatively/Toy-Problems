// Second iteration - fastest
function reversePrefix(word: string, ch: string): string {
  let result: string[] = [];
  let splitted = word.split("");
  let idx = splitted.indexOf(ch);

  if (!splitted.includes(ch)) {
    return word;
  }

  result = result.concat(splitted.slice(0, idx + 1)).reverse();
  result = result.concat(splitted.slice(idx + 1));

  return result.join("");
}

// Third Iteration - slowest
// function reversePrefix(word: string, ch: string): string {
//   let result: string[] = [];
//   let found = false;

//   for (let i = 0; i < word.length; i++) {
//       if (word[i] !== ch) {
//           result.push(word[i]);
//       } else if (word[i] === ch && !found) {
//           result.push(word[i]);
//           result.reverse();
//           found = true;
//       } else {
//           result.push(word[i])
//       }
//   }

//   return found ? result.join("") : word;
// };

// First iteration - second slowest
// function reversePrefix(word: string, ch: string): string {
//   let result: string[] = [];
//   let splitted = word.split("");
//   let idx;

//   if (!splitted.includes(ch)) {
//     return word;
//   }

//   for (let i = 0; i < splitted.length; i++) {
//     if (word[i] !== ch) {
//       result.push(word[i]);
//     } else {
//       result.push(word[i]);
//       idx = i;
//       break;
//     }
//   }

//   result = result.reverse();
//   result = result.concat(splitted.slice(idx + 1));

//   return result.join("");
// }
