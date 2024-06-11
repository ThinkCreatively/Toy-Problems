function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let notFound: number[] = [];

  for (let num of arr1) {
    if (arr2.indexOf(num) === -1) {
      notFound.push(num);
    }
  }

  let notFoundSorted = notFound.sort((a, b) => a - b);
  let result: number[] = [];

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        result.push(arr2[i]);
      }
    }
  }

  result = result.concat(notFoundSorted);

  return result;
}
