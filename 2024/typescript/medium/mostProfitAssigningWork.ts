function maxProfitAssignment(
  difficulty: number[],
  profit: number[],
  worker: number[]
): number {
  let maxProf = 0;
  let tempProf;

  // for each worker
  for (let i = 0; i < worker.length; i++) {
    let availableWork = worker[i];
    let counter = difficulty.length - 1;

    // check how much profit they can make off of a difficulty
    if (availableWork !== 0) {
      let lastStopped = 0;
      for (let j = difficulty.length; j > -1; j--) {
        let amount = worker[i] / difficulty[j];
        let potProf = amount * profit[j];

        if (!availableWork) {
          if (potProf > tempProf) {
            tempProf = potProf;
            tempProf = 0;
            availableWork = worker[i];
          }
        }

        if (difficulty[j] > availableWork) {
          continue;
        } else {
          availableWork -= difficulty[i];

          if (potProf > tempProf) {
            tempProf = potProf;
          }
        }
      }

      maxProf += tempProf;
      tempProf = 0;
    }
  }

  return maxProf;
}
