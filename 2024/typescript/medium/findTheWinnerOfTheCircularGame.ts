function findTheWinner(n: number, k: number): number {
  let count = 1;
  let friends: number[] = [];
  for (let i = 1; i <= n; i++) {
    friends.push(count);
    count++;
  }

  let pos = 0;
  let delCount = 1;

  while (friends.length !== 1) {
    if (pos === friends.length - 1) {
      if (delCount !== k) {
        pos = 0;
        delCount++;
      }
    } else {
      pos++;
      delCount++;
    }

    if (delCount === k) {
      friends.splice(pos, 1);
      delCount = 1;
    }
  }

  return friends[0];
}
