// @ts-nocheck

function copyRandomList(head: RandomNode | null): Node | null {
  let node = head;

  let values: number[] = [];
  let random: number[] = [];

  while (node) {
    values.push(node.val);

    if (node.random) {
      random.push(node.random.val);
    } else {
      random.push(null);
    }

    node = node.next;
  }

  let newList = new Node(values[0], new RandomNode());
  let count = 1;
  console.log(values);

  const build = (node: Node) => {
    if (count === values.length - 1) {
      node.val = values[count];
      node.next = null;
      return;
    }

    node.val = values[count];
    node.next = new RandomNode();
    count++;
    build(node.next);
  };

  build(newList.next);

  let newNodes = [];
  let temp = newList;

  while (temp) {
    newNodes.push(temp);
    temp = temp.next;
  }

  let randomInd = [];

  for (let i = 0; i < random.length; i++) {
    for (let j = 0; j < newNodes.length; i++) {
      if (random[i] === newNodes[j].val) {
        randomInd.push(i);
      }
    }
  }

  return newList;
}
