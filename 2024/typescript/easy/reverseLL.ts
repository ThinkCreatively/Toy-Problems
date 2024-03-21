class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let values: number[] = [];
  let node: ListNode | null = head;

  while (node) {
    values.push(node.val);
    node = node.next;
  }

  if (values.length < 2) return head;

  values.reverse();

  let count = 1;
  let result = new ListNode(values[0], null);

  const create = (node: ListNode) => {
    if (count === values.length - 1) {
      node.next = new ListNode(values[count], null);
      return;
    }

    node.next = new ListNode(values[count], null);
    count++;
    create(node.next);
  };

  create(result);

  return result;
}
