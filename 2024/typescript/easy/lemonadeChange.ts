function lemonadeChange(bills: number[]): boolean {
  let fives = [];
  let tens = [];
  let twenties = [];

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      fives.push(5);
      continue;
    }

    if (bills[i] === 10) {
      if (fives.length) {
        fives.pop();
        tens.push(10);
        continue;
      }

      return false;
    }

    if (bills[i] === 20) {
      if (tens.length && fives.length) {
        tens.pop();
        fives.pop();
      } else if (fives.length >= 3) {
        fives.pop();
        fives.pop();
        fives.pop();
      } else {
        return false;
      }

      twenties.push(20);
      continue;
    }
  }

  return true;
}
