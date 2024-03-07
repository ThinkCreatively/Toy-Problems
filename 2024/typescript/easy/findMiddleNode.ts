class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let result: ListNode | null;
  let index = 0;

  const getLength = (node: ListNode | null) => {
    if (!node) return;

    index++;

    getLength(node.next);
  };

  getLength(head);

  let target = 0;

  if (index % 2 === 0) {
    target = index / 2 + 1;
  } else {
    target = Math.ceil(index / 2);
  }

  index = 0;

  const getNode = (node: ListNode | null) => {
    index++;

    if (index === target) {
      result = node;
      return;
    }

    //@ts-ignore
    getNode(node.next);
  };

  getNode(head);

  //@ts-ignore
  return result;
}
