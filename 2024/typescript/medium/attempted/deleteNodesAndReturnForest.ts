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

function delNodes(
  root: TreeNode | null,
  to_delete: number[]
): Array<TreeNode | null> {
  let trees = [];

  let traverse = (node: TreeNode | null, deleting: boolean = false) => {
    if (!node) return;

    if (deleting) {
      if (node.left && to_delete.includes(node.left.val)) {
        traverse(node.left, true);

        node.left = null;
      }
      if (node.right && to_delete.includes(node.right.val)) {
        traverse(node.right, true);

        node.right = null;
        return;
      }
      if (node.left) {
        trees.push(node.left);
      }
      if (node.right) {
        trees.push(node.right);
      }

      return;
    }

    if (node.left && to_delete.includes(node.left.val)) {
      traverse(node.left, true);

      node.left = null;
      return;
    }

    traverse(node.left);

    if (node.right && to_delete.includes(node.right.val)) {
      traverse(node.right, true);

      node.right = null;
      return;
    }

    traverse(node.right);
  };

  traverse(root);

  trees.push(root);

  return trees;
}
