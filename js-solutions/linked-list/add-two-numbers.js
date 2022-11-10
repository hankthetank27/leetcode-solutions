// 2. Add Two Numbers
// Medium

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]



// Constraints:

//     The number of nodes in each linked list is in the range [1, 100].
//     0 <= Node.val <= 9
//     It is guaranteed that the list represents a number that does not have leading zeros.


 //Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2, rem = 0) {
  if (!l1 && !l2) return rem ? new ListNode(rem) : null;
  
  const val = (l1?.val || 0) + (l2?.val || 0) + rem;
  const node = new ListNode();
  
  if (val >= 10){
      node.val = val - 10;
      rem = 1;
  } else {
      node.val = val;
      rem = 0;
  }
  
  
  if (l1 && l2){
      node.next = addTwoNumbers(l1.next, l2.next, rem);
  } else if (l1){
      node.next = addTwoNumbers(l1.next, l2, rem);
  } else if (l2){
      node.next = addTwoNumbers(l1, l2.next, rem);
  }
  
  return node;
};


// iterative
var addTwoNumbers2 = function (l1, l2) {

  let head = new ListNode();
  let current = head;
  let rem = 0;

  while (l1 || l2 || rem) {

    let val = 0 + rem;
    rem = 0;

    if (l1) {
      val += l1.val;
      l1 = l1.next
    };

    if (l2) {
      val += l2.val;
      l2 = l2.next
    };

    if (val > 9) {
      val = val - 10;
      rem = 1;
    };

    current.next = new ListNode(val);
    current = current.next;

  };
  return head.next;
};