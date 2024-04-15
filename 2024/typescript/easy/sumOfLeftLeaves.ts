class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sumOfLeftLeaves(root: TreeNode | null): number {
  let result = 0;

  const traverse = (node: TreeNode | null, left: boolean) => {
    if (!node) return;

    if (left && !node.left && !node.right) {
      result += node.val;
    }

    return traverse(node.left, true) || traverse(node.right, false);
  };

  traverse(root, false);

  return result;
}
