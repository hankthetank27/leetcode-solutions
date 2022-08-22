/*
347. Top K Frequent Elements
Medium

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

//DONT USE ARRAY.FILL WITH SUB ARRAYS... IT CREATES REFERENCES TO THE SAME ARRAY PASSED IN :(
    
function topKFrequent(nums: number[], k: number): number[] {
    const map: Record<string,number> = {};
    const res: Array<number> = [];
    const bucket: Array<Array<string>> = Array.from({length:nums.length}, () => []);

    for (const num of nums) map[num] = 1 + (map[num] || 0);
    for (const key in map) bucket[map[key] - 1].push(key);
    
    let counter = bucket.length - 1;
    while(res.length < k){
        for (const el of bucket[counter]){
            if (res.length < k) res.push(Number(el));
            else break;
        }
        counter--;
    }
    return res;
};

console.log(topKFrequent([12, 12, 12, 12, -1, 1, 3, -1, 7, 12, 12], 1));

export {};