function productExceptSelf(nums: number[]): number[] {
  let result: number[] = [];
  let prefix: number[] = [];
  let postfix: number[] = [];
  let temp = 1;

  for (let i = 0; i < nums.length; i++) {
    prefix.push((temp *= nums[i]));
  }

  temp = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    postfix.unshift((temp *= nums[i]));
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result.push(1 * postfix[i + 1]);
    } else if (i === nums.length - 1) {
      result.push(prefix[i - 1]);
    } else {
      result.push(prefix[i - 1] * postfix[i + 1]);
    }
  }

  return result;
}
