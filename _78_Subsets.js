/**
 * * 78. Subsets
 * Given a set of distinct integers, nums, return all possible subsets.

 Note: The solution set must not contain duplicate subsets.

 For example,
 If nums = [1,2,3], a solution is:
 [
 [3],
 [1],
 [2],
 [1,2,3],
 [1,3],
 [2,3],
 [1,2],
 []
 ]

 test : [1,2,3]

 []
 [1]
 [1, 2]
 [1, 2, 3]
 [1, 3]
 [2]
 [2, 3]
 [3]

 1 — 2 - 3
 |   |
 2   3
 |
 3


 time : O(2^n);
 space : O(n);
 * @param {number[]} nums
 * @return {number[][]}
 */

function helper(res, list, nums, index) {
    res.push(list.slice());
    for(let i = index; i < nums.length; i++) {
        list.push(nums[i]);
        helper(res, list, nums, i+1);
        list.pop();
    }
}


var subsets = function(nums) {
    let res= [];
    if(nums == null || nums.length == 0) return res;
    helper(res,[],nums, 0);
    return res;
};

console.log(subsets([1,2,3]))
