# 19. Remove Nth Node From End of List
# Medium

# Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

# Example 1:

# Input: head = [1,2,3,4,5], n = 2
# Output: [1,2,3,5]

# Example 2:

# Input: head = [1], n = 1
# Output: []

# Example 3:

# Input: head = [1,2], n = 1
# Output: [1]

 

# Constraints:

#     The number of nodes in the list is sz.
#     1 <= sz <= 30
#     0 <= Node.val <= 100
#     1 <= n <= sz

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# my original solutions (same time complexity)
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        
        def findNth(node):
            if not node:
                return [0, node]
            
            res = findNth(node.next)
            res[0] += 1
            
            if res[0] == n + 1:
                res[1] = node
            return res
        
        node = findNth(head)[1]
        
        if not node:
            return head.next
        else:
            node.next = node.next.next
        return head

# classic/typical solution
class Solution2:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        left, right = head, head
        counter = 0
        
        while counter < n:
            right = right.next
            counter += 1
            
        if not right:
            return head.next
            
        while right.next:
            right = right.next
            left = left.next
            
        left.next = left.next.next
        return head