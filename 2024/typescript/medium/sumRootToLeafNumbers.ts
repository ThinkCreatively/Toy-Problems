function sumNumbers(root: TreeNode | null): number {
  let nums: number[] = [];
  let temp = "";

  const traverse = (node: TreeNode, temp: string) => {
    if (node && !node.left && !node.right) {
      temp += String(node.val);
      nums.push(Number(temp));
      return;
    }

    temp += String(node.val);

    if (node.left) {
      traverse(node.left, temp);
    }

    if (node.right) {
      traverse(node.right, temp);
    }
  };

  traverse(root as TreeNode, temp);

  return nums.reduce((acc, el) => (acc += el), 0);
}
