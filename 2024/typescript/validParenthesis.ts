function isValid(s: string): boolean {
  let splitted = s.split("");
  let firstChar = splitted[0];
  let finalChar = splitted[splitted.length - 1];

  if (firstChar === ")" || firstChar === "]" || firstChar === "}") {
    return false;
  }

  if (finalChar === "(" || finalChar === "[" || finalChar === "{") {
    return false;
  }

  let stack: string[] = [];
  let starters = new Set(["[", "(", "{"]);

  for (let i = 0; i < splitted.length; i++) {
    if (starters.has(splitted[i])) {
      stack.unshift(splitted[i]);
    } else {
      if (!checkParens([stack[0], splitted[i]])) {
        return false;
      } else {
        stack.shift();
      }
    }
  }

  if (stack.length) return false;

  return true;
}

const checkParens = (toTest: string[]): boolean => {
  const validSets = new Set(["[]", "()", "{}"]);
  const joined = toTest.join("");

  if (validSets.has(joined)) {
    return true;
  } else {
    return false;
  }
};
