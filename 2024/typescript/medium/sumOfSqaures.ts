function judgeSquareSum(c: number): boolean {
  if (c === 0) return true;

  let sum = 0;
  let squares = [0];
  let num = 1;
  let sqrt = Math.floor(Math.sqrt(c));

  while (squares[squares.length - 1] < sqrt) {
    let newSquare = num * num;
    if (newSquare === c || newSquare + 1 === c || newSquare + newSquare === c) {
      return true;
    }

    squares.push(newSquare);
    num++;
  }

  for (let i = 2; i < squares.length; i++) {
    for (let j = i + 1; j < squares.length; j++) {
      if (squares[i] + squares[j] === c) return true;
      if (squares[i] + squares[j] > c) break;
    }
  }

  return false;
}
