function trap(height: number[]): number {
  if (height.length < 3) return 0;
  let amount = 0;
  let tempCount = 0;
  let p1 = 0;
  let p2 = p1 + 1;
  let lastLoc;
  let matchHeight = false;
  let nextHeight = -1;

  while (p2 < height.length) {
    if (height[p1] > height[p2]) {
      lastLoc = p2;
      if (!nextHeight) {
        while (p2 < height.length) {
          if (height[p2] >= height[p1]) {
            matchHeight = true;
            amount += tempCount;
            tempCount = 0;
            nextHeight = p2;
            break;
          }

          tempCount += height[p1] - height[p2];
          p2++;
        }
        if (!matchHeight) {
          tempCount = 0;
          p1++;
          p2 = lastLoc + 1;
          continue;
        } else {
          p1 = nextHeight;
          matchHeight = false;
          nextHeight = -1;
          p2++;
        }
      }
    } else {
      nextHeight = -1;
      p1++;
      p2++;
    }
  }

  return amount;
}
