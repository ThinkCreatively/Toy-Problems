function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) {
    return 1;
  }

  let chars = {};
  let length = 0;
  let tempLen = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (!chars[char]) {
      chars[char] = 1;
      tempLen++;
    } else {
      chars = {};
      i--;
      chars[char] = 1;
      tempLen = 1;
    }

    if (tempLen > length) {
      length = tempLen;
    }
  }

  return length;
}
