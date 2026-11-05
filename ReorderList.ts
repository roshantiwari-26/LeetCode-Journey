/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  let secondHalf: ListNode | null = slow.next;
  slow.next = null;

  let prev: ListNode | null = null;
  let curr: ListNode | null = secondHalf;
  while (curr) {
    let nxt: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }

  let first: ListNode | null = head;
  let second: ListNode | null = prev;

  while (second) {
    let temp1: ListNode | null = first!.next;
    let temp2: ListNode | null = second.next;

    first!.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
}
