interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let firstTreeNodes: number[] = [];
  let secTreeNodes: number[] = [];

  const navigate = (node: TreeNode | null, first: boolean) => {
    if (first) {
      if (node) {
        firstTreeNodes.push(node.val);
      } else {
        firstTreeNodes.push(-1);
        return;
      }
    } else {
      if (node) {
        secTreeNodes.push(node.val);
      } else {
        secTreeNodes.push(-2);
        return;
      }
    }

    return navigate(node.left, first) || navigate(node.right, first);
  };

  navigate(p, true);
  navigate(q, false);

  if (firstTreeNodes.length !== secTreeNodes.length) return false;

  for (let i = 0; i < firstTreeNodes.length; i++) {
    if (firstTreeNodes[i] !== secTreeNodes[i]) {
      return false;
    }
  }

  return true;
}
