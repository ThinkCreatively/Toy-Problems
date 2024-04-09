function kthFactor(n: number, k: number): number {
  let factors: number[] = [];
  let i = 1;

  while (factors.length < k && i <= n) {
    if (n % i === 0) {
      factors.push(i);
    }
    i++;
  }

  return factors[k - 1] ? factors[k - 1] : -1;
}
