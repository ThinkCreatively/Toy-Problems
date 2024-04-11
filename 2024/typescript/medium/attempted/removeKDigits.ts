function removeKdigits(num: string, k: number): string {
  if (k === num.length) return "0";

  let splitted = num.split("");
  let lowest = Infinity;
  let temp;

  for (let i = 0; i < splitted.length; i++) {
    if (i === 0) {
      temp = splitted.slice(i + k);
    } else {
      temp = splitted.slice(0, i).concat(splitted.slice(i + k));
    }

    if (Number(temp.join("")) < lowest) {
      lowest = Number(temp.join(""));
    }
  }

  let count = 0;
  let indexSkip = 1;
  let newTemp = [];
  let p1 = 0;
  let p2 = p1 + 1;

  while (p1 < splitted.length) {
    temp.push(splitted[p1]);
    count++;

    while (p2 < splitted.length) {
      if (p2 === indexSkip) continue;
      if (count === k && Number(newTemp.join("")) < lowest) {
        lowest = Number(newTemp.join(""));
        count = 0;
        break;
      }

      temp.push(splitted[p2]);
      p2++;
      count++;
    }
  }

  return String(lowest);
}
