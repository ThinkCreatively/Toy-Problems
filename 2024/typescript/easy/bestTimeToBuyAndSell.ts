function maxProfit(prices: number[]): number {
  if (prices.length === 2) {
    return prices[0] < prices[1] ? prices[1] - prices[0] : 0;
  }

  let result = 0;
  let p1 = 0;
  let p2 = p1 + 1;

  while (p2 < prices.length) {
    if (prices[p2] - prices[p1] > result) {
      result = prices[p2] - prices[p1];
    }

    if (prices[p1] > prices[p2]) {
      p1 = p2;
    }

    p2++;
  }

  return result;
}
