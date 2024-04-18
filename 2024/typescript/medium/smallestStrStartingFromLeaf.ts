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

function smallestFromLeaf(root: TreeNode | null): string {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let words: string[][] = [];
  let tempWord = [];

  const traverse = (node: TreeNode, word: string[]) => {
    if (!node.left && !node.right) {
      word = word.concat([String(node.val)]);
      words.push(word.reverse());
      return;
    }

    word = word.concat([String(node.val)]);

    if (node.left) {
      traverse(node.left, word);
    }

    if (node.right) {
      traverse(node.right, word);
    }
  };

  traverse(root as TreeNode, tempWord);

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      words[i][j] = alphabet[words[i][j]];
    }
    //@ts-ignore
    words[i] = words[i].join("");
  }

  words.sort();

  //@ts-ignore
  return words[0];
}
