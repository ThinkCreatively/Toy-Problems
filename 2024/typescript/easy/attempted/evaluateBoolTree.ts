// @ts-nocheck
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

function evaluateTree(root: TreeNode): boolean {
  if (!root.left && !root.right) {
    if (root.val === 0) return false;
    return true;
  }

  let traverse = (node: TreeNode) => {
    if (!node) return false;

    if (node.val === 2) {
      if (node.left.val === 1 || node.right.val === 1) {
        return true;
      }

      if (
        node.right.val !== 1 &&
        (node.left.val === 3 || node.left.val === 2)
      ) {
        traverse(node.left);
      }
      if (
        node.left.val !== 1 &&
        (node.right.val === 3 || node.right.val === 2)
      ) {
        traverse(node.right);
      }
    }

    if (node.val === 3) {
      if (node.left.val === 1 && node.right.val === 1) {
        return true;
      }

      if (
        node.right.val !== 1 &&
        (node.left.val === 3 || node.left.val === 2)
      ) {
        traverse(node.left);
      }
      if (
        node.left.val !== 1 &&
        (node.right.val === 3 || node.right.val === 2)
      ) {
        traverse(node.right);
      }
    }
  };

  return traverse(root);
}
