function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addTwoNumbers(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let num1 = 0;
  let num2 = 0;
  let carry = 0;
  let solution = new ListNode(0);
  let current = solution;

  while (p1 || p2) {
    num1 = p1 ? p1.val : 0;
    num2 = p2 ? p2.val : 0;
    console.log("num1 is:", num1);
    console.log("num2 is:", num2);
    if (num1 + num2 + carry > 9) {
      current.next = new ListNode(num1 + num2 + carry - 10);
      current = current.next;
      carry = 1;
    } else {
      current.next = new ListNode(num1 + num2 + carry);
      current = current.next;
      carry = 0;
    }

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  if (carry) {
    current.next = new ListNode(carry);
  }
  return solution.next;
}

console.log(addTwoNumbers([2, 3, 4, 5], [8, 6, 4, 2]));
