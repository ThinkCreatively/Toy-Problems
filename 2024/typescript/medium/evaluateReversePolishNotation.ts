function evalRPN(tokens: string[]): number {
  let stack: string[] = [];

  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(Number(tokens[i]))) {
      stack.unshift(tokens[i]);
    } else {
      let string = "";
      string += stack[1] + " " + tokens[i] + " " + stack[0];
      stack.shift();
      stack.shift();
      stack.unshift(String(parseInt(eval(string))));
    }
  }

  return Number(stack[0]);
}
