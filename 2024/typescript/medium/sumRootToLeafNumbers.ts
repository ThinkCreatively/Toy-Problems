function sumNumbers(root: TreeNode | null): number {
  let nums: number[] = [];
  let result = 0;
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

  for (let num of nums) {
    result += num;
  }

  return result;
}
