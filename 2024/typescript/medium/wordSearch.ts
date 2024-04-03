// Original approach before refactoring is at the bottom
function exist(board: string[][], word: string): boolean {
  const numRows = board.length;
  const numCols = board[0].length;

  const backtrack = (row, col, index) => {
    if (index === word.length) {
      return true;
    }

    if (
      row < 0 ||
      row >= numRows ||
      col < 0 ||
      col >= numCols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const temp = board[row][col];
    board[row][col] = "#";

    const found =
      backtrack(row + 1, col, index + 1) ||
      backtrack(row - 1, col, index + 1) ||
      backtrack(row, col + 1, index + 1) ||
      backtrack(row, col - 1, index + 1);

    board[row][col] = temp;

    return found;
  };

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (backtrack(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

// function exist(board, word) {
//   let index = 0;
//   let starts = [];

//   for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < board[i].length; j++) {
//           if (board[i][j] === word[index]) {
//               starts.push([i, j])
//           }
//       }
//   }

//   let x = starts[0][0];
//   let y = starts[0][1];
//   let tries = 1;
//   let taken = [];

//   const checkTaken = (x, y) => {
//       for (let i = 0; i < taken.length; i += 2) {
//           if (taken[i] === x && taken[i + 1] === y) {
//               return false;
//           }
//       }

//       return true;
//   };

//   while (index !== word.length - 1) {
//       if (board[x][y] === word[index]) {
//           taken.push(x, y);
//           index++;
//       }

//       if (board[x - 1] && board[x - 1][y] === word[index] && checkTaken(x - 1, y)) {
//           x--;
//           continue;
//       } else if (board[x + 1] && board[x + 1][y] === word[index] && checkTaken(x + 1, y)) {
//           x++;
//           continue;
//       } else if (board[x][y + 1] === word[index] && checkTaken(x, y + 1)) {
//           y++;
//           continue;
//       } else if (board[x][y - 1] && board[x][y - 1] === word[index] && checkTaken(x, y - 1)) {
//           y--;
//           continue;
//       } else {
//           if (tries < starts.length) {
//               x = starts[tries][0];
//               y = starts[tries][1];
//               tries++;
//               index = 0;
//               continue;
//           }
//           return false;
//       }
//   }
//   return true;
// }
