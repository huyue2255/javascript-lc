/**
 * @param {number[]} nums
 * @return {boolean}
 * For example
 * A = [2,3,1,1,4] return true;
 */
var canJump = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > max) return false;
        let cur = i + nums[i];
        max = Math.max(cur, max);
    }
    return max >= nums.length - 1;
};