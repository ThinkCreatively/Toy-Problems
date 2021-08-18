// In this problem the question is are there duplicates in the inputs
// EX: (1, 2, 2) = true while (1, 2, 3) = false
// In this problem I will be doing it first with a frequency counter approach then a multiple pointers approach

// Frequency counter approach

// function areThereDuplicates(...args) {
//   let frequency = {};
//   for (let i = 0; i < args.length; i++) {
//     let currentVal = args[i];
//     if (frequency[currentVal] === 1) {
//       return true;
//     }
//     frequency[currentVal] ? frequency[currentVal]++ : frequency[currentVal] = 1;
//   }
//   return false;
// };

// Multiple Pointers approach

function areThereDuplicates(...args) {
  let firstPointer = args[0];
  for (let i = 1; i < args.length; i++) {
    let secondPointer = args[i];
    if (firstPointer === secondPointer) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
