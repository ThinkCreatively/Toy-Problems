const solve = (n) => {
  for (let i = 0; i < n; i += 0.1) {
    if (Math.floor(i * i) === n) {
      return Math.floor(i);
    }
  }
  for (let j = 0; j < n; j++) {
    if (j * j === n) {
      return j
    }
  }
}

console.log(solve(9));
console.log(solve(25));
console.log(solve(26));