function canBeEqual(target: number[], arr: number[]): boolean {
  let targetCount = {};
  let arrCount = {};

  for (let i = 0; i < target.length; i++) {
    targetCount[target[i]]
      ? targetCount[target[i]]++
      : (targetCount[target[i]] = 1);
    arrCount[arr[i]] ? arrCount[arr[i]]++ : (arrCount[arr[i]] = 1);
  }

  for (let key in targetCount) {
    if (!arrCount[key]) return false;

    if (targetCount[key] !== arrCount[key]) {
      return false;
    }
  }

  return true;
}
