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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
  let firstVals: number[] = [];
  let secondVals: number[] = [];

  for (let i = 0; i < descriptions.length; i++) {
    let group = descriptions[i];
    if (!firstVals.includes(group[0])) {
      firstVals.push(group[0]);
    }
    if (!secondVals.includes(group[1])) {
      secondVals.push(group[1]);
    }
  }

  for (let i = 0; i < firstVals.length; i++) {
    if (!secondVals.includes(firstVals[i])) {
      firstVals.push(firstVals[i]);
      firstVals.splice(i, 1);
      break;
    }
  }

  let order: number[][] = [];

  for (let i = firstVals.length - 1; i > -1; i--) {
    for (let j = 0; j < descriptions.length; j++) {
      let group = descriptions[j];
      if (group[0] === firstVals[i]) {
        order.push(group);
      }
    }
  }

  let tree;

  if (order[0][2] === 1) {
    tree = new TreeNode(order[0][0], new TreeNode(order[0][1]));
  } else {
    tree = new TreeNode(order[0][0], null, new TreeNode(order[0][1]));
  }

  let count = 1;

  let build = (node: TreeNode | null) => {
    if (count > order.length || !node) return;
    let tempCount = count;

    for (let i = 0; i < order.length; i++) {
      if (order[i][0] === node.val) {
        if (order[i][2] === 1) {
          node.left = new TreeNode(order[i][1]);
        } else {
          node.right = new TreeNode(order[i][1]);
        }

        count++;
      }
    }

    build(node.left);
    build(node.right);
  };

  build(tree);

  return tree;
}
