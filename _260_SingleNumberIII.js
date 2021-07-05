/**
 * 260. Single Number III
 * Given an array of numbers nums, in which exactly two elements appear only once and
 * all the other elements appear exactly twice. Find the two elements that appear only once.

 For example:

 Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

 A B : 二进制数字有且至少有一位是不相同

 3 : 011
 5 : 101

 3 ^ 5 : 110  -- 6
 -6 : 11111111111111111111111111111010
 6 & -6 : 000010

 1, 2, 1, 3, 2, 5

 diff = 3 ^ 5

 time : O(n)
 space : O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let set = new Set();
    nums.forEach(x => set.has(x) ? set.delete(x): set.add(x))
    return Array.from(set);
};

let nums = [1,2,1,3,2,5];
console.log(singleNumber(nums));