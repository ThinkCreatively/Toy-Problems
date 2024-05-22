function partition(s: string): string[][] {
  if (s.length === 1) return [[s]];

  let result: string[][] = [];
  let splitted = s.split("");
  let reversed = splitted.slice().reverse();

  if (splitted.join("") === reversed.join("")) {
    result.push([s]);
  }

  result.push(s.split(""));

  let forward = "";
  let backward = "";
  let partitions: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (!forward.length) {
      forward += s[i];
      backward = s[i] + backward;
      continue;
    }

    if (forward + s[i] !== s[i] + backward) {
      partitions.push(forward);
    }

    forward += s[i];
    backward = s[i] + backward;

    if (forward === backward) {
      partitions.push(forward);

      if (i === s.length - 2) {
        partitions.push(s[i + 1]);
        result.push(partitions);
        break;
      }

      result.push(partitions);
      partitions = [];
    } else {
      forward = s[i];
      backward = s[i];
    }
  }

  return result;
}
