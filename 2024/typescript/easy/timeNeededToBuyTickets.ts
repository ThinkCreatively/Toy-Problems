function timeRequiredToBuy(tickets: number[], k: number): number {
  let time = 0;
  let counter = -1;

  while (tickets[k] !== 0) {
    if (counter === tickets.length - 1) {
      counter = 0;
    } else {
      counter++;
    }

    if (tickets[counter] === 0) {
      continue;
    }

    tickets[counter]--;
    time++;
  }

  return time;
}
