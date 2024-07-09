function averageWaitingTime(customers: number[][]): number {
  let totalTimeTaken = 0;
  let timeWaited = 0;
  let addedTime = 0;

  for (let i = 0; i < customers.length; i++) {
    if (addedTime !== 0) {
      timeWaited +=
        customers[i][1] + customers[i][0] - customers[i][0] + addedTime;
      totalTimeTaken = customers[i][1] + customers[i][0] + addedTime;
      addedTime = 0;
    } else {
      timeWaited += customers[i][1] + customers[i][0] - customers[i][0];
      totalTimeTaken = customers[i][1] + customers[i][0];
    }

    if (customers[i + 1] && totalTimeTaken > customers[i + 1][0]) {
      addedTime += totalTimeTaken - customers[i + 1][0];
      totalTimeTaken = 0;
    }
  }

  return timeWaited / customers.length;
}
