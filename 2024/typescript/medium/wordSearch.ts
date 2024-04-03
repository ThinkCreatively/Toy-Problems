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