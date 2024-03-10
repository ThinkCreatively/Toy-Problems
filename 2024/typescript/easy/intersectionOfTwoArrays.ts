function intersection(nums1: number[], nums2: number[]): number[] {
  let uniques: Set<number> = new Set();
  let smaller: number[] = [];
  let longer;

  if (nums1.length > nums2.length) {
    longer = new Set(nums1);
    smaller = nums2;
  } else {
    longer = new Set(nums2);
    smaller = nums1;
  }

  for (let num of smaller) {
    if (longer.has(num)) {
      uniques.add(num);
    }
  }

  let result: number[] = Array.from(uniques);

  return result;
}
