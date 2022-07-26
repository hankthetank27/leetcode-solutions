/*
  Given an array of strings strs, group the anagrams together. You can return the answer in any order.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  

  Example 1:

  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

  Example 2:

  Input: strs = [""]
  Output: [[""]]

  Example 3:

  Input: strs = ["a"]
  Output: [["a"]]
*/

function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, string[]> = {};
  for (let word of strs) {
    const sorted = [...word].sort().join('');
    map[sorted] ? map[sorted].push(word) : map[sorted] = [word];
  }
  return Object.values(map);
}


// function groupAnagrams(strs: string[]): string[][] {
//   //make anagram key for each word, being an object with number of times each letter occurs in word
//   const keys: Record <string, Record<string, number>> = {};
//   const resultObj: Record <string, string[]> = {}; 
  
//   strs.forEach(word => {
//     for (let key of Object.keys(keys)) {
//       if (isAnagram(word, keys[key])) return resultObj[key].push(word);   
//     }
//     resultObj[word] = [word];
//     return keys[word] = makeKey(word);
//   })
//   return Object.values(resultObj);
// };

// function isAnagram(str: string, key: Record <string, number>) {
//   if (str.length !== Object.keys(key).length) return false;
//   const replicaKey = {...key};
//   for (let char of str) if (!replicaKey[char]--) return false;
//   return true;
// }

// function makeKey(str: string) {
//   const key: Record <string, number> = {};
//   for (let char of str) key[char] = (key[char] || 0) + 1;
//   return key;
// }
