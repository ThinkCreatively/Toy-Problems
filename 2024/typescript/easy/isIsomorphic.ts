function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let sPos = {};
  let tPos = {};

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    if (sPos[sChar] && sPos[sChar] !== tChar) {
      return false;
    }

    if (tPos[tChar] && tPos[tChar] !== sChar) {
      return false;
    }

    sPos[sChar] = tChar;
    tPos[tChar] = sChar;
  }

  return true;
}
