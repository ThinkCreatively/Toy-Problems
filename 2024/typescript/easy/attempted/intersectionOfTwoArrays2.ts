function intersect(nums1: number[], nums2: number[]): number[] {
  let smallest;
  let largest;

  if (nums1.length > nums2.length) {
    smallest = nums1;
    largest = nums2;
  } else {
    smallest = nums2;
    largest = nums1;
  }

  let result: number[] = [];
  let p1 = 0;

  while (p1 < smallest.length) {
    if (largest[p1] === smallest[0]) {
      result.push(largest[p1]);
      break;
    }

    p1++;
  }

  let p2 = p1 + 1;

  for (let i = p2; i < largest.length; i++) {
    if (largest[p2] === smallest[1]) {
      result.push(largest[p2]);
      return result;
    }
  }

  return result;
}
