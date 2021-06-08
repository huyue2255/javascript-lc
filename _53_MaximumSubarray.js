/**
 * @param {number[]} nums
 * @return {number}
 * 就是维护一个dp的array. 同时你要维护一个最大的值。
 */
var maxSubArray = function(nums) {
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + (dp[i-1] < 0 ? 0 : dp[i-1]);
        res = Math.max(dp[i], res);
    }
    return res;
 };

console.log(maxSubArray([1,3,-4,2]))