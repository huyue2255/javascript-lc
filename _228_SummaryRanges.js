/**
 * 228. Summary Ranges
 * Given a sorted integer array without duplicates, return the summary of its ranges.

 Example 1:
 Input: [0,1,2,4,5,7]
 Output: ["0->2","4->5","7"]
 Example 2:
 Input: [0,2,3,4,6,8,9]
 Output: ["0","2->4","6","8->9"]

 time : O(n)
 space : O(n)
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        while (i < nums.length && nums[i] + 1 == nums[i+1]) {
            i++;
        }
        if (num != nums[i]) {
            res.push(`${num}->${nums[i]}`);
        } else {
            res.push(`${num}`);
        }
    }
    return res;
};

console.log(summaryRanges([0,2,3,4,6,8,9]))

