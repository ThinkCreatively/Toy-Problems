class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let values: number[] = [];
  let node = head;

  while (node) {
    values.push(node.val);
    node = node.next;
  }

  values.splice(values.length - n, 1);

  if (!values.length) return null;

  let count = 0;
  let newList = new ListNode();

  const build = (node: ListNode) => {
    if (count === values.length) return;

    node.val = values[count];

    if (count === values.length - 1) return;

    node.next = new ListNode();
    count++;
    build(node.next);
  };

  build(newList);

  return newList;
}
