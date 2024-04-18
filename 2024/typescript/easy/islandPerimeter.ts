function islandPerimeter(grid: number[][]): number {
  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        if (grid[i][j + 1] && grid[i][j + 1] === 1) {
          counter++;
        }
        if (grid[i + 1] && grid[i + 1][j] === 1) {
          counter++;
        }
        if (grid[i][j - 1] && grid[i][j - 1] === 1) {
          counter++;
        }
        if (grid[i - 1] && grid[i - 1][j] === 1) {
          counter++;
        }
      } else {
        if (j === 0) {
          counter++;
        }
        if (i === 0) {
          counter++;
        }
        if (j === grid[i].length - 1) {
          counter++;
        }
        if (i === grid.length - 1) {
          counter++;
        }
      }
    }
  }

  return counter;
}
