function numTeams(rating: number[]): number {
  let numOfTeams = 0;

  for (let i = 0; i < rating.length; i++) {
    let iSol = rating[i];
    for (let j = i + 1; j < rating.length; j++) {
      let jSol = rating[j];
      if (iSol < jSol) {
        for (let k = j + 1; k < rating.length; k++) {
          let kSol = rating[k];
          if (jSol < kSol) {
            numOfTeams++;
          }
        }
      }
      if (iSol > jSol) {
        for (let k = j + 1; k < rating.length; k++) {
          let kSol = rating[k];
          if (jSol > kSol) {
            numOfTeams++;
          }
        }
      }
    }
  }

  return numOfTeams;
}

// Chat Solution:
// function numTeams(rating: number[]): number {
//   let n = rating.length;
//   let count = 0;

//   for (let j = 0; j < n; j++) {
//       let leftSmaller = 0;
//       let leftLarger = 0;
//       let rightSmaller = 0;
//       let rightLarger = 0;

//       for (let i = 0; i < j; i++) {
//           if (rating[i] < rating[j]) {
//               leftSmaller++;
//           }
//           if (rating[i] > rating[j]) {
//               leftLarger++;
//           }
//       }

//       for (let k = j + 1; k < n; k++) {
//           if (rating[k] < rating[j]) {
//               rightSmaller++;
//           }
//           if (rating[k] > rating[j]) {
//               rightLarger++;
//           }
//       }

//       count += leftSmaller * rightLarger + leftLarger * rightSmaller;
//   }

//   return count;
// }
