// 3rd iteration, with modifications for speed

function dailyTemperatures(temperatures: number[]): number[] {
  let result = new Array(temperatures.length).fill(0);
  let stack = [[temperatures[0], 0]];
  let length = temperatures.length;

  for (let i = 1; i < length; i++) {
    let curTemp = temperatures[i];

    while (stack.length > 0 && curTemp > stack[stack.length - 1][0]) {
      result[stack[stack.length - 1][1]] = i - stack[stack.length - 1][1];
      stack.pop();
    }

    stack.push([curTemp, i]);
  }

  return result;
}

/*
Iterations:

ITERATION 1: Brute Force, too slow

function dailyTemperatures(temperatures: number[]): number[] {
    let result = [];

    for (let i = 0; i < temperatures.length; i++) {
        let currentTemp = temperatures[i];
        let nextTemp = temperatures[i + 1];

        if (nextTemp >= currentTemp + 1) {
            result.push(1);
        } else {
            let count = 0;
            for (let j = i + 1; j <= temperatures.length; j++) {
                if (temperatures[j] === undefined) {
                    result.push(0);
                    break;
                }

                count++;

                if (temperatures[j] >= currentTemp + 1) {
                    result.push(count);
                    break;
                }

                if (j === temperatures[temperatures.length - 1]) {
                    result.push(0);
                }
            }
        }
    }

    return result;
};

ITERATION 2: Using stack, too slow

function dailyTemperatures(temperatures: number[]): number[] {
    let result = new Array(temperatures.length);
    let stack = [[temperatures[0], 0]];

    for (let i = 1; i < temperatures.length; i++) {
        let curTemp = temperatures[i];

        if (curTemp > stack[0][0]) {
            while (stack[0] && curTemp > stack[0][0]) {
                result.splice(stack[0][1], 1, i - stack[0][1]);
                stack.shift();
            }

            stack.unshift([curTemp, i]);
        } else {
            stack.unshift([curTemp, i]);
        }
    }

    while (stack[0]) {
        result.splice(stack[0][1], 1, 0);
        stack.shift();
    }

    return result;
};
*/
