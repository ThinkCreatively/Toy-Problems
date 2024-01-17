function findContentChildren(g: number[], s: number[]): number {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let lastChildgreed = g[g.length - 1];
  let lastCookieSize = s[s.length - 1];
  if (s.length > g.length) {
    if (lastCookieSize > lastChildgreed) {
      return g.length;
    }
  }

  let counter = 0;
  let cookieTaken = false;

  for (let i = s.length - 1; i >= 0; i--) {
    let currCookie = s[i];
    for (let j = g.length - 1; j >= 0; j--) {
      let currKid = g[j];
      if (currCookie >= currKid) {
        g.splice(j, 1);
        counter++;
        cookieTaken = true;
        break;
      }
    }
    if (cookieTaken) {
      s.splice(i, 1);
      cookieTaken = false;
    }
  }

  return counter;
}
