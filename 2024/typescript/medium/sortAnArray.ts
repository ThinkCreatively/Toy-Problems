function sortArray(nums: number[]): number[] {
  let p1 = 0;

  while (p1 !== nums.length - 1) {
    for (let i = p1 + 1; i < nums.length; i++) {
      if (nums[i] < nums[p1]) {
        let temp = nums[p1];
        nums[p1] = nums[i];
        nums[i] = temp;
      }
    }
    p1++;
  }

  return nums;
}

// Merge Sort solution
// function sortArray(nums: number[]): number[] {
//   function merge(arr: number[], left: number, mid: number, right: number): void {
//     let n1 = mid - left + 1;
//     let n2 = right - mid;

//     let L = new Array(n1);
//     let R = new Array(n2);

//     for (let i = 0; i < n1; i++) L[i] = arr[left + i];
//     for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

//     let i = 0, j = 0, k = left;
//     while (i < n1 && j < n2) {
//       if (L[i] <= R[j]) {
//         arr[k] = L[i];
//         i++;
//       } else {
//         arr[k] = R[j];
//         j++;
//       }
//       k++;
//     }

//     while (i < n1) {
//       arr[k] = L[i];
//       i++;
//       k++;
//     }

//     while (j < n2) {
//       arr[k] = R[j];
//       j++;
//       k++;
//     }
//   }

//   function mergeSortHelper(arr: number[], left: number, right: number): void {
//     if (left < right) {
//       let mid = Math.floor(left + (right - left) / 2);

//       mergeSortHelper(arr, left, mid);
//       mergeSortHelper(arr, mid + 1, right);

//       merge(arr, left, mid, right);
//     }
//   }

//   mergeSortHelper(nums, 0, nums.length - 1);
//   return nums;
// }
