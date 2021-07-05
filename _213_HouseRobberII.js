/**
 * 213. House Robber II
 * time : O(n)
 * space : O(1)
 * @param {number[]} nums
 * @return {number}
 */

function helper(nums, start, end) {
    if (start == end) return nums[start];

    if (end - start == 1) return Math.max(nums[start], nums[end]);
    let dp = new Array(end - start +1);

    dp[0] = nums[start];
    dp[1] = Math.max(nums[start], nums[start+1]);
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(dp[i-2]+nums[start+i], dp[i-1]);
    }
    return dp[dp.length - 1];
}

var rob = function(nums) {
    if (nums == null || nums.length == 0) return 0;

    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return Math.max(nums[0], nums[1]);

    let res1 = helper(nums, 0, nums.length-2);
    let res2 = helper(nums, 1, nums.length-1);
    return Math.max(res1, res2);
};

