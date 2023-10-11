/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function (string) {
  // create a result variable
  const charFrequency = [];
  // Iterate over the input string
  for (var i = 0; i < string.length; i++) {
    console.log('current character', string[i], 'result array', charFrequency, 'index', i)
    // Check if result array is empty (1st iteration)
    if (charFrequency.length === 0) {
      charFrequency.push({ character: string[i], frequency: 1 });
    } else if (charFrequency[i - 1].character === string[i]) {
      charFrequency[i].frequency++;
    } else {
      if (i === charFrequency.length - 1) {
        charFrequency.push({ character: string[i], frequency: 1 });
      }
    }
  }
  return charFrequency;
};

console.log(characterFrequency('mississippi'));
// console.log(characterFrequency('james'));
// console.log(characterFrequency('mmmaaaiiibbb'));