/*
  Given the head of a singly linked list, reverse the list, and return the reversed list.

  Example 1:
  Input: head = [1,2,3,4,5]
  Output: [5,4,3,2,1]

  Example 2:
  Input: head = [1,2]
  Output: [2,1]

  Example 3:
  Input: head = []
  Output: []

*/


// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    while (head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};

//  function reverseList(head: ListNode | null): ListNode | null {
//   let current = head;
//   let prev = null;
//   while (current.next) {
//     head = head.next;
//     current.next = prev;
//     prev = current;
//     current = head;
//   }
//   head.next = prev;
//   return head
// };

const ll = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))
console.log(ll)
console.log(reverseList(ll))