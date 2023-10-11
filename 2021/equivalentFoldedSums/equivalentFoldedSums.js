/*
You are given a list of integers nums of even length. Consider an operation where you pick any number in nums
and update it with a value between [1, max(nums)].

Return the minimum number of operations required such that for every i, nums[i] + nums[n - 1 - i] equals to the same number.
*/

const equivalentFoldedSums = (array) => {
  let outerSum = array[0] + array[array.length - 1];
  let innerSum = array[1] + array[array.length - 2];

  if (outerSum === innerSum) {
    return 0;
  } else {
    let change = outerSum - innerSum;
    array[1] -= change;
    return 1;
  }
}

console.log(equivalentFoldedSums([1, 4, 3, 5]));
