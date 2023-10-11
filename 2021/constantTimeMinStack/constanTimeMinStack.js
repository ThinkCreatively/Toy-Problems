/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
 var Stack = function() {
  this.storage = {};
  this.sizeOfStack = 0;
  this.minimumValue = undefined;
};

// add an item to the top of the stack
Stack.prototype.push = function(value) {
  // Add something to the stack
  this.storage[this.sizeOfStack] = value;
  // Increment the size of the stack
  this.sizeOfStack++;
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
  // Check if size of stack is greater than 0
  if (this.sizeOfStack <= 0) {
    return;
  }
  // Decrement stack size
  this.sizeOfStack--;
  // Keep track of removed variable
  var removed = this.storage[this.sizeOfStack];
  // Delete value on top of the stack
  delete this.storage[this.sizeOfStack];
  // Return the removed value
  return removed;
};

// return the number of items in the stack
Stack.prototype.size = function() {
  return this.sizeOfStack;
};

// return the minimum value in the stack
Stack.prototype.min = function() {
  // Iterate through the storage obj of the stack
  for (var key in this.storage) {
    // Check if the minimum value is undefined
    if (this.minimumValue === undefined) {
      this.minimumValue = this.storage[key];
    }
    // Compare if next value is smaller than current minimum value
    if (this.storage[key] < this.minimumValue) {
      // If is smaller make minimum value current value
      this.minimumValue = this.storage[key];
    }
  }
  return this.minimumValue;
};

var example = new Stack()
example.push(4)
example.push(3)
console.log(example.min() === 3);
example.push(3)
example.push(2)
example.push(2)
console.log(example.min() === 2);
example.pop();
example.pop();
example.pop();
console.log(example);
console.log(example.size() === 2);