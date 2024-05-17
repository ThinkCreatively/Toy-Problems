/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function removeLeafNodes(
  root: TreeNode | null,
  target: number
): TreeNode | null {
  const traverse = (node: TreeNode) => {
    if (
      node.left &&
      !node.left.left &&
      !node.left.right &&
      node.left.val === target
    ) {
      node.left = null;
    }
    if (
      node.right &&
      !node.right.left &&
      !node.right.right &&
      node.right.val === target
    ) {
      node.right = null;
    }

    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }

    if (
      node.left &&
      !node.left.left &&
      !node.left.right &&
      node.left.val === target
    ) {
      node.left = null;
    }
    if (
      node.right &&
      !node.right.left &&
      !node.right.right &&
      node.right.val === target
    ) {
      node.right = null;
    }

    return;
  };

  if (root) {
    traverse(root);
  }

  if (!root?.left && !root?.right && root?.val === target) {
    root = null;
  }

  return root;
}
