function generateParenthesis(n: number): string[] {
  if (n === 1) return ["()"];
  let combos: string[] = [];

  const makeCombos = (part: string, openCount: number, closeCount: number) => {
    if (part.length === n * 2) {
      combos.push(part);
    }

    if (closeCount < openCount) {
      makeCombos(part + ")", openCount, closeCount + 1);
    }

    if (openCount < n) {
      makeCombos(part + "(", openCount + 1, closeCount);
    }
  };

  makeCombos("", 0, 0);

  return combos;
}
