# 76. Minimum Window Substring
# Hard

# Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

# The testcases will be generated such that the answer is unique.

# A substring is a contiguous sequence of characters within the string.

 

# Example 1:

# Input: s = "ADOBECODEBANC", t = "ABC"
# Output: "BANC"
# Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

# Example 2:

# Input: s = "a", t = "a"
# Output: "a"
# Explanation: The entire string s is the minimum window.

# Example 3:

# Input: s = "a", t = "aa"
# Output: ""
# Explanation: Both 'a's from t must be included in the window.
# Since the largest window of s only has one 'a', return empty string.

 

# Constraints:

#     m == s.length
#     n == t.length
#     1 <= m, n <= 105
#     s and t consist of uppercase and lowercase English letters.

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        
        if len(s) < len(t):
            return ''
        
        total = len(t)
        map = {}
        
        for c in t:
            map[c] = 1 + map.get(c, 0)
        
        current, res = '', ''
        
        l = 0
        for r in range(len(s)):
            
            current += s[r]
            
            if s[r] in map:
                if map[s[r]] > 0:
                    total -= 1
                map[s[r]] -= 1
            
            while total == 0:
                if not res or len(current) < len(res):
                    res = current
                    
                current = current[1:]
                temp = s[l]
                l += 1
                
                if temp in map:
                    if map[temp] >= 0:
                        total += 1
                    map[temp] += 1
                    
        return res