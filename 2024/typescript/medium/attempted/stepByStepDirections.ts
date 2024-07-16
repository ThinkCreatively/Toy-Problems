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

function getDirections(
  root: TreeNode,
  startValue: number,
  destValue: number
): string {
  let directions = "";
  let started = false;

  let traverse = (node: TreeNode) => {
    if (node.val === destValue) {
      started = false;
      return;
    }

    if (node.val === startValue) {
      started = true;
    }

    if (node.left) {
      if (started) {
        directions += "L";
      }
      traverse(node.left);
    }
    if (node.right) {
      if (started) {
        directions += "R";
      }
      traverse(node.right);
    } else {
      if (started) {
        directions += "U";
      }
      return;
    }
  };

  traverse(root);

  return directions;
}
