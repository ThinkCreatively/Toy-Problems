class MinStack {
  stack: number[];
  sorted: number[];

  constructor() {
    this.stack = [];
    this.sorted = [];
  }

  push(val: number): void {
    this.stack.unshift(val);
    this.sortStack();
  }

  pop(): void {
    this.stack.shift();
    this.sortStack();
  }

  top(): number {
    return this.stack[0];
  }

  getMin(): number {
    return this.sorted[0];
  }

  sortStack(): void {
    let temp = Array.from(this.stack);
    this.sorted = temp.sort((a, b) => a - b);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
