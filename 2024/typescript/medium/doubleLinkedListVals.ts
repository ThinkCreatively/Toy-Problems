function doubleIt(head: ListNode | null): ListNode | null {
  let values: number[] = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  if (values.length === 1) {
    if (values[0] < 5) {
      return new ListNode(values[0] * 2, null);
    }

    let nums = String(values[0] * 2).split("");

    return new ListNode(Number(nums[0]), new ListNode(Number(nums[1]), null));
  }

  let target: number[] = [];
  let lastNum = 0;

  for (let i = values.length - 1; i > -1; i--) {
    let num = values[i] * 2;
    let toPush = num % 10;

    if (i === values.length - 1) {
      lastNum = num;
      target.push(toPush);
      continue;
    }

    if (i === 0) {
      if (lastNum > 9) {
        lastNum = num;
        target.push(toPush + 1);
      } else {
        lastNum = num;
        target.push(toPush);
      }

      if (num > 9) {
        target.push(1);
      }

      break;
    }

    if (lastNum > 9) {
      lastNum = num;
      target.push(toPush + 1);
    } else {
      lastNum = num;
      target.push(toPush);
    }
  }

  let targetVals = target.reverse();

  let counter = 0;
  let result = new ListNode();

  const build = (node: ListNode) => {
    if (counter === targetVals.length - 1) {
      node.val = Number(targetVals[counter]);
      node.next = null;
      return;
    }

    node.val = Number(targetVals[counter]);
    counter++;
    node.next = new ListNode();
    build(node.next);
  };

  build(result);

  return result;
}
