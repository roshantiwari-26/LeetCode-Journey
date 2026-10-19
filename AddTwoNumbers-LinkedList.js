/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let ptr1 = l1;
  let ptr2 = l2;
  let prev = null;
  let carry = 0;

  while (ptr1 !== null && ptr2 !== null) {
    let sum = ptr1.val + ptr2.val + carry;
    ptr1.val = sum % 10;
    carry = Math.floor(sum / 10);

    prev = ptr1;
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  if (ptr2 !== null) {
    prev.next = ptr2;
    ptr1 = ptr2;
  }

  while (ptr1 !== null) {
    let sum = ptr1.val + carry;
    ptr1.val = sum % 10;
    carry = Math.floor(sum / 10);

    prev = ptr1;
    ptr1 = ptr1.next;
  }

  if (carry > 0) {
    prev.next = new ListNode(carry);
  }

  return l1;
};
