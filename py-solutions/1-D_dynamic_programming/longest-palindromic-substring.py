# 5. Longest Palindromic Substring
# Medium

# Given a string s, return the longest palindromic substring in s.

 

# Example 1:

# Input: s = "babad"
# Output: "bab"
# Explanation: "aba" is also a valid answer.

# Example 2:

# Input: s = "cbbd"
# Output: "bb"


# making palindrome from the middle outward, for each odd and even set
class Solution:
    def longestPalindrome(self, s: str) -> str:   
        res = ''
        for i in range(len(s)):
            oddStr = self.makePalindrome(s, i, i)
            evenStr = self.makePalindrome(s, i, i + 1)
            if len(oddStr) > len(res): res = oddStr
            if len(evenStr) > len(res): res = evenStr
        return res
    
    def makePalindrome(self, s, left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            right += 1
            left -= 1
        # shrink pointers by 1 once conditon breaks
        return s[left + 1:right]
            