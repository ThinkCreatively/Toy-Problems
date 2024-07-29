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
