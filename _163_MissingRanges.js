/**
 * 163. Missing Ranges
 * Given a sorted integer array where the range of elements are in the inclusive range [lower, upper],
 * return its missing ranges.

 For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"].

 [2147483647] 0 2147483647
 ["0->2147483646"]
 ["0->2147483646","-2147483648->2147483647"]

 time : O(n)
 space : O(n)
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const res = [];
    nums = [lower - 1, ...nums, upper + 1];
    for (let i = 1; i < nums.length; i++) {
        let diff = nums[i] - nums[i-1];
        if (diff == 2) {
            res.push(`${nums[i] - 1}`);
        } else if (diff > 2) {
            res.push(`${nums[i-1] + 1}->${nums[i]-1}`);
        }
    }
    return res;
};

let nums = [0, 1, 3, 50, 75];
console.log(findMissingRanges(nums, 0, 99));