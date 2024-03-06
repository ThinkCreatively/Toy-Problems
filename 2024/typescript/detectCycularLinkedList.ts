class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false;
  }

  let slowPntr: ListNode | null = head;
  let fastPntr: ListNode | null = head.next;
  let result = false;

  while (fastPntr && slowPntr) {
    if (fastPntr.val === slowPntr.val && fastPntr.next === slowPntr.next) {
      result = true;
      break;
    }
    if (!fastPntr || !fastPntr.next || !fastPntr.next.next) return result;

    fastPntr = fastPntr.next.next;
    slowPntr = slowPntr.next;
  }

  return result;
}
