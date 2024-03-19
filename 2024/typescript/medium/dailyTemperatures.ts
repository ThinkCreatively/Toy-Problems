function dailyTemperatures(temperatures: number[]): number[] {
  let result: number[] = [];
  let stack: [number, number][] = [];

  for (let i = 0; i < temperatures.length; i++) {
    let curTemp = temperatures[i];
    if (!stack.length) stack.push([curTemp, i]);

    if (curTemp > stack[0][0]) {
      while (stack[0] && curTemp > stack[0][0]) {
        result.splice(stack[0][1], 0, i - stack[0][1]);
        stack.shift();
      }

      stack.unshift([curTemp, i]);
    } else {
      stack.unshift([curTemp, i]);
    }
  }

  for (let i = 0; i < stack.length; i++) {
    result.push(0);
  }

  return result;
}

dailyTemperatures([30, 60, 90]);
