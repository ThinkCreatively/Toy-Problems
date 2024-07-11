function reverseParentheses(s: string): string {
  let parts = {};
  let part = "";
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(") {
      if (part.length) {
        parts[count] = [part];
        part = "";
      }
      count++;
    } else if (s[i] === ")") {
      if (part.length) {
        if (parts[count]) {
          parts[count].push(part);
        } else {
          parts[count] = [part];
        }
        part = "";
      }
      count--;
    } else {
      part += s[i];
    }
  }

  let vals: string[] = [];

  for (let key in parts) {
    vals.push(parts[key].join(","));
  }

  for (let i = vals.length - 1; i > -1; i--) {
    if (vals[i + 1]) {
      let index = vals[i].indexOf(",");

      if (index !== -1) {
        // vals[i] = vals[i].split(",");
      } else {
        vals[i] += vals[i + 1];
      }
    }

    vals[i] = vals[i].split("").reverse().join("");
  }

  console.log(vals);

  return "";
}
