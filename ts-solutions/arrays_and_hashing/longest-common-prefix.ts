/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

//divide and conquer
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0]
    const midInd = Math.floor(strs.length / 2)
    const left = longestCommonPrefix(strs.slice(0, midInd));
    const right = longestCommonPrefix(strs.slice(midInd));
    return compare(left, right);
};

function compare(str1: string, str2: string): string {
    const minLen = Math.min(str1.length, str2.length);
    let result = '';
    for (let i = 0; i < minLen; i++) {
        if (str1[i] === str2[i]) result += str1[i];
        else break;
    }
    return result;
}

//iterative
// function longestCommonPrefix(strs: string[]): string {
//     return strs.reduce((result, current) => {
//         let prefix = '';
//         for (let i = 0; i < current.length; i++){
//             if (current[i] === result[i]) prefix += current[i];
//             else break;
//         };
//         return prefix;
//     });
// };