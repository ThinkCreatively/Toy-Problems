function numWaterBottles(numBottles: number, numExchange: number): number {
  if (numExchange > numBottles) return numBottles;

  let total = numBottles;
  let remainder = numBottles / numExchange;

  while (remainder > 0) {
    total += remainder;
    remainder = Math.floor(remainder / numExchange);
  }

  return total;
}
