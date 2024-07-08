function passThePillow(n: number, time: number): number {
  let pos = 1;
  let forward = true;

  while (time) {
    if (pos === n) {
      forward = false;
    }

    if (pos === 1) {
      forward = true;
    }

    if (forward) {
      pos++;
    } else {
      pos--;
    }

    time--;
  }

  return pos;
}
