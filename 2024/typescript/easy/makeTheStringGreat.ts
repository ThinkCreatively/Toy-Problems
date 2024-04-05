function makeGood(s: string): string {
  if (!s.length || s.length === 1) return s;

  let splitted = s.split("");

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === splitted[i].toUpperCase()) {
      if (splitted[i - 1] === splitted[i].toLowerCase()) {
        splitted.splice(i - 1, 2);
        i = -1;
        continue;
      }

      if (splitted[i + 1] === splitted[i].toLowerCase()) {
        splitted.splice(i, 2);
        i = -1;
      }
    }
  }

  return splitted.join("");
}
