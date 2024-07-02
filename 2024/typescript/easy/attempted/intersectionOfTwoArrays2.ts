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

// Second attempt

// function intersect(nums1: number[], nums2: number[]): number[] {
//   if (nums1.length === nums2.length) {
//     for (let i = 0; i < nums1.length; i++) {
//       if (nums1[i] === nums2[i]) {
//         if (nums1[i + 1] === nums2[i + 1] || nums1[i - 1] === nums2[i - 1]) {
//           return nums1;
//         }
//       }
//     }
//   }

//   let smallest;
//   let largest;

//   if (nums1.length > nums2.length) {
//     smallest = nums1;
//     largest = nums2;
//   } else {
//     smallest = nums2;
//     largest = nums1;
//   }

//   for (let i = 0; i < largest.length; i++) {
//     if (largest[i] === smallest[0]) {
//       if (largest[i + 1] === smallest[1]) {
//         return [smallest[0], smallest[1]];
//       }
//     }

//     if (largest[i] === smallest[1]) {
//       if (largest[i + 1] === smallest[2]) {
//         return [smallest[1], smallest[2]];
//       }

//       if (largest[i - 1] === smallest[0]) {
//         return [smallest[1], smallest[0]];
//       }
//     }
//   }
// }
