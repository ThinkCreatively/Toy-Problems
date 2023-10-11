// Given the head of a singly linked list, reverse the list, and return the reversed list.
/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function (head) {
  // console.log(head.val);
  // console.log(head.next);
  // head.val = head.next.val;
  // console.log(head.val);
  let values = [];
  while (head.val !== null) {
    values.push(head.val);
    head.val = head.next.val;
    head.next = head.next.next
  }
  console.log('values', values)
};

console.log(reverseList([1, 2, 3, 4, 5]));
console.log(reverseList([1, 2]));
console.log(reverseList([]));