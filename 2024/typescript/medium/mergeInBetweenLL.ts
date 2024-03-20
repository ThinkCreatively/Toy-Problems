class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  let node = list1;
  let l1values: number[] = [];
  let l2values: number[] = [];
  let resVals: number[] = [];

  while (node !== null) {
    l1values.push(node.val);
    node = node.next;
  }

  node = list2;

  while (node !== null) {
    l2values.push(node.val);
    node = node.next;
  }

  let length = l1values.length + l2values.length;

  for (let i = 0; i < length; i++) {
    if (i < a) {
      resVals.push(l1values[i]);
    }

    if (i === a) {
      let slice = l1values.slice(b + 1);
      resVals = resVals.concat(l2values, slice);
    }
  }

  let result = new ListNode(resVals[0], null);
  let count = 1;

  const createList = (node: ListNode) => {
    if (count === resVals.length - 1) {
      node.next = new ListNode(resVals[count], null);
      return;
    }

    node.next = new ListNode(resVals[count], null);

    count++;
    createList(node.next);
  };

  createList(result);

  return result;
}
