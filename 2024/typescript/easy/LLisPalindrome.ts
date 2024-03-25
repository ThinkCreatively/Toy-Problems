function isPalindrome(head: ListNode | null): boolean {
  let values: number[] = [];
  let node = head;

  while (node) {
    values.push(node.val);
    node = node.next;
  }

  let reverse = values.slice().reverse();

  return values.join("") === reverse.join("");
}
