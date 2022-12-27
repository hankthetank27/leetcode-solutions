// 23. Merge k Sorted Lists
// Hard
// 15.1K
// 570
// company
// Amazon
// company
// Microsoft
// company
// Facebook

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

//  

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:

// Input: lists = []
// Output: []

// Example 3:

// Input: lists = [[]]
// Output: []

//  

// Constraints:

//     k == lists.length
//     0 <= k <= 104
//     0 <= lists[i].length <= 500
//     -104 <= lists[i][j] <= 104
//     lists[i] is sorted in ascending order.
//     The sum of lists[i].length will not exceed 104.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists.length) return null
  if (lists.length === 1) return lists[0]
  const updatedLists = []
  for (let i = 0; i < lists.length; i += 2){
      updatedLists.push(
          lists[i + 1]
              ? merge(lists[i], lists[i + 1])
              : merge(lists[i], null)
      )
  }
  return mergeKLists(updatedLists)
};

const merge = (l1, l2) => {
  if (!l1 && !l2) return null
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val < l2.val){
      l1.next = merge(l1.next, l2)
      return l1
  } else {
      l2.next = merge(l1, l2.next)
      return l2
  }
}
