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

// Chat solution:
// function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
//   if (!root) return "";

//   const findPath = (node: TreeNode | null, value: number, path: string[]): boolean => {
//       if (!node) return false;
//       if (node.val === value) return true;

//       path.push('L');
//       if (findPath(node.left, value, path)) return true;
//       path.pop();

//       path.push('R');
//       if (findPath(node.right, value, path)) return true;
//       path.pop();

//       return false;
//   };

//   const startPath: string[] = [];
//   const destPath: string[] = [];

//   findPath(root, startValue, startPath);
//   findPath(root, destValue, destPath);

//   // Find common ancestor
//   let i = 0;
//   while (i < startPath.length && i < destPath.length && startPath[i] === destPath[i]) {
//       i++;
//   }

//   // Construct directions
//   const upMoves = startPath.length - i;
//   const downMoves = destPath.slice(i).join('');

//   return 'U'.repeat(upMoves) + downMoves;
// }
