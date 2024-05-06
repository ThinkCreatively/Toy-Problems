//@ts-nocheck
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteNode(node: ListNode): void {
  let traverse = (n: ListNode) => {
    if (!n) return;

    if (n.val === node.val) {
      if (n.next) {
        node.val = node.next.val;
        node.next = node.next.next;
      } else {
        node = null;
      }
    }

    traverse(n.next);
  };

  traverse(node);
}
