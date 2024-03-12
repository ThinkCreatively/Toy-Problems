//TODO: ATTEMPTED NOT COMPLETE, Leetcode problem 1171

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  // easier to deal with arrays, get all the values form the linked list
  let values: number[] = [];

  const getVals = (node: ListNode | null) => {
    if (!node) return;

    values.push(node.val);

    getVals(node.next);
  };

  getVals(head);

  /*

  TODO: This section is one thought path to try prefix sum
  let prefixSums: number[] = [];
  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    sum += values[i];
    prefixSums.push(sum);
  }

  */

  // deleted flag to track if we have modified the values, WIP
  let deleted = 0;

  // two pointer check for zero sums, delete if it is a zero sum
  for (let i = 0; i < values.length; i++) {
    if (values[i] + values[i + 1] === 0) {
      values.splice(i, 2);
      deleted++;
      i = -1;
    }
  }

  // Check for cases such [1, -1]
  if (!values.length) return null;

  if (!deleted) {
  }


  // Once deletions have been completed, build new linked list off of remaining values
  let list = new ListNode(values[0], null);
  values.shift();

  const build = (node: ListNode) => {
    if (!node.next && values.length > 0) {
      node.next = new ListNode(values[0], null);
      values.shift();
      build(node.next);
    } else {
      return;
    }
  };

  build(list);

  return head;
}
