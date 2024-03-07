class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) return list1;
  let result: ListNode = new ListNode(-1, null);
  let values: number[] = [];
  let node = list1;

  while (node) {
    values.push(node.val);
    node = node.next;
  }

  node = list2;

  while (node) {
    values.push(node.val);
    node = node.next;
  }

  let sorted = values.sort((a, b) => a - b);

  const traverse = (node: ListNode) => {
    if (sorted.length === 1) {
      node.val = sorted[0];
      return;
    }
    node.val = sorted[0];
    node.next = new ListNode(-1, null);
    sorted.shift();
    traverse(node.next);
  };

  traverse(result);

  return result;
}
