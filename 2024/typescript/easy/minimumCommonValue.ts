function getCommon(nums1: number[], nums2: number[]): number {
  let result = -1;
  let shorter = nums1.length >= nums2.length ? nums2 : nums1;
  let set = nums1.length >= nums2.length ? new Set(nums1) : new Set(nums2);

  for (let i = 0; i < shorter.length; i++) {
    if (set.has(shorter[i])) {
      result = shorter[i];
      return result;
    }
  }

  return result;
}
