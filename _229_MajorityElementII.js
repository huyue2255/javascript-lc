/**
 * 229. Majority Element II
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * The algorithm should run in linear time and in O(1) space.
 *
 * time : O(n)
 * space : O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const memo = new Map()
    for (let i = 0; i < nums.length; i++) {
        // count the no. of occurances
        memo.set(nums[i],memo.get(nums[i])+1 || 1)
    }
    const result = []
    for (let [key,value] of memo) {
        // if greater than 1/3rd of total items then push it in result array
        if (value > nums.length / 3) result.push(key)
    }
    return result ;
};