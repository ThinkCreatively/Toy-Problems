function minimumDeletions(s: string): number {
  let splitted = s.split("");
  let lastChar = splitted[0];
  let deletions = 0;

  for (let i = 1; i < splitted.length; i++) {
    let currChar = splitted[i];

    if (lastChar === "b" && currChar === "a") {
      splitted.splice(i, 1);
      deletions++;
      lastChar = splitted[0];
      i = 1;
    } else {
      lastChar = currChar;
    }
  }

  return deletions;
}
