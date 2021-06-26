/**
 * 159. Longest Substring with At Most Two Distinct Characters
 * Given a string, find the length of the longest substring T that contains at most 2 distinct characters.

 For example, Given s = “eceba”,

 T is "ece" which its length is 3.

 sliding window

 “eceba”

 time : O(n)
 space : O(n)
 思路： dp
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let start = 0;
    let index = 0;
    let res = 0;
    let map = new Map();
    while (index < s.length) {
        map.set(s[index], index);
        index++;

        if (map.size > 2) {
            let leftMost = s.length;
            for (let num of map.values()) {
                leftMost = Math.min(leftMost, num);
            }
            map.delete(s[leftMost]);
            start = leftMost + 1;
        }
        res = Math.max(res, index - start);
    }
    return res;
};

let str = "eceba";
console.log(lengthOfLongestSubstringTwoDistinct(str));
