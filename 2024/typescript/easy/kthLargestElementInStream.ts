class KthLargest {
  largest: number;
  stream: number[];
  kth: number;

  constructor(k: number, nums: number[]) {
    this.largest = k;
    this.stream = nums.sort((a, b) => a - b);
    this.kth = k;
  }

  add(val: number): number {
    this.stream.push(val);
    this.stream = this.stream.sort((a, b) => a - b);
    return this.stream[this.stream.length - this.kth];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
