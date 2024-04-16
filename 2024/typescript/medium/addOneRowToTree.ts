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

function addOneRow(
  root: TreeNode | null,
  val: number,
  depth: number
): TreeNode | null {
  if (depth === 1) {
    let tempNode = root;
    root = new TreeNode(val, tempNode);
    return root;
  }

  const getOrAddNodes = (node: TreeNode | null, curDepth: number) => {
    if (!node) return;

    if (curDepth + 1 === depth) {
      let leftTemp = node.left;
      let rightTemp = node.right;
      node.left = new TreeNode(val, leftTemp, null);
      node.right = new TreeNode(val, null, rightTemp);
      return;
    }

    return (
      getOrAddNodes(node.left, curDepth + 1) ||
      getOrAddNodes(node.right, curDepth + 1)
    );
  };

  getOrAddNodes(root, 1);

  return root;
}
