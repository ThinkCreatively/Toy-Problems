function reorderList(head: ListNode | null): void {
  let values: number[] = [];
  let node = head;

  while (node) {
    values.push(node.val);
    node = node.next;
  }

  let order: number[] = [];
  let p1 = 0;
  let p2 = values.length - 1;

  while (p1 < p2) {
    order.push(values[p1], values[p2]);
    p1++;
    p2--;
  }

  if (values.length % 2 !== 0) {
    order.push(values[p1]);
  }

  let count = 0;

  while (head) {
    head.val = order[count];
    count++;
    head = head.next;
  }

  // const change = (node: ListNode | null) => {
  //   if (!node) return;
  //   node.val = order[count];
  //   count++;
  //   change(node.next);
  // };

  // change(head);
}
