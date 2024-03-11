function isValidSudoku(board: string[][]): boolean {
  let result = true;
  let rowIndex = 0;
  let colIndex = 0;

  // get row values, checks each row as we make them
  let curRowVals = new Set();
  for (let i = 0; i < 81; i++) {
    let currRow = board[rowIndex];
    let numForm = Number(currRow[colIndex]);

    if (!isNaN(numForm)) {
      if (!curRowVals.has(numForm)) {
        curRowVals.add(numForm);
      } else {
        return false;
      }
    }

    colIndex++;

    if (colIndex % 9 === 0) {
      curRowVals = new Set();
      colIndex = 0;
      rowIndex++;
    }
  }

  rowIndex = 0;
  colIndex = 0;

  let curColVals = new Set();
  for (let i = 0; i < 81; i++) {
    let currRow = board[rowIndex];
    let numForm = Number(currRow[colIndex]);

    if (!isNaN(numForm)) {
      if (!curColVals.has(numForm)) {
        curColVals.add(numForm);
      } else {
        return false;
      }
    }

    rowIndex++;

    if (rowIndex % 9 === 0) {
      curColVals = new Set();
      rowIndex = 0;
      colIndex++;
    }
  }

  for (let i = 0; i < 9; i++) {
    const set = new Set<string>();
    const rowStart = Math.floor(i / 3) * 3;
    const colStart = (i % 3) * 3;
    for (let j = 0; j < 9; j++) {
      const row = rowStart + Math.floor(j / 3);
      const col = colStart + (j % 3);
      const cell = board[row][col];
      if (cell !== ".") {
        if (set.has(cell)) {
          return false;
        } else {
          set.add(cell);
        }
      }
    }
  }

  return result;
}
