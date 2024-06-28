function findCenter(edges: number[][]): number {
  let number = 1;

  for (let i = 0; i < edges.length; i++) {
    if (!edges[i].includes(number)) {
      number++;
      i = -1;
    }
  }

  return number;
}
