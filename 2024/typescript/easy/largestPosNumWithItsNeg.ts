// Second iteration
function findMaxK(nums: number[]): number {
  let sorted = nums.sort((a, b) => a - b);

  for (let i = sorted.length - 1; i > -1; i--) {
    if (sorted.includes(sorted[i] * -1)) {
      return sorted[i];
    }
  }

  return -1;
}

// First iteration
// function findMaxK(nums: number[]): number {
//   let sorted = nums.sort((a, b) => a - b);
//   let positives: number[] = [];
//   let negatives: number[] = [];

//   for (let num of sorted) {
//     num < 0 ? negatives.push(num) : positives.push(num);
//   }

//   for (let i = positives.length - 1; i > -1; i--) {
//     if (negatives.includes(positives[i] * -1)) {
//       return positives[i];
//     }
//   }

//   return -1;
// }
