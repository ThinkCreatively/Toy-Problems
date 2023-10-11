// Problem: return nth item in the fibonacci sequence using recursion

function fib(num) {
  if (num <= 1) return num;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4)); // return 3
console.log(fib(10)); // return 55
console.log(fib(28)); // return 317811
console.log(fib(35)); // return 9227465