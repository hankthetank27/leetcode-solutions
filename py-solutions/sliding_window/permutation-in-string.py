# 567. Permutation in String
# Medium

# Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

# In other words, return true if one of s1's permutations is the substring of s2.

 

# Example 1:

# Input: s1 = "ab", s2 = "eidbaooo"
# Output: true
# Explanation: s2 contains one permutation of s1 ("ba").

# Example 2:

# Input: s1 = "ab", s2 = "eidboaoo"
# Output: false

 

# Constraints:

#     1 <= s1.length, s2.length <= 104
#     s1 and s2 consist of lowercase English letters.

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        word_map = {}
        
        for char in s1:
            word_map[char] = word_map.get(char, 0) + 1
        
        count = len(s1)
        left = 0
        
        for right, rchar in enumerate(s2):
            lchar = s2[left]
            
            # handle right
            if rchar in word_map:
                # word does not need more of char
                if word_map[rchar] > 0: count -= 1
                word_map[rchar] -= 1
                             
            # check window size before removing chars from word
            if right - left == len(s1):
                # handle left
                if lchar in word_map:
                    # char is already in word
                    if word_map[lchar] >= 0: count += 1
                    word_map[lchar] += 1
                left += 1
                
            if count == 0:
                return True
                
        return False
