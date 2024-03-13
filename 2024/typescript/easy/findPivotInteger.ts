function pivotInteger(n: number): number {
  if (n === 1) return 1;

  for (let i = 0; i < n; i++) {
    if (getFront(i) === getBack(i, n)) {
      return i;
    }
  }

  return -1;
}

const getFront = (index: number): number => {
  let frontSum = 0;

  for (let i = 0; i < index; i++) {
    frontSum += i;
  }

  return frontSum;
};

const getBack = (index: number, n: number): number => {
  let backSum = 0;

  for (let i = n; i > index; i--) {
    backSum += i;
  }

  return backSum;
};
