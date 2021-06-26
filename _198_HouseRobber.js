/**
 * 198. House Robber
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint stopping you from robbing
 * each of them is that adjacent houses have security system connected and it will automatically contact
 * the police if two adjacent houses were broken into on the same night.
 *
 [1, 3, 2, 4, 1]
 No  Yes
 1 :  0    1
 3 :  1    3
 2 :  3    3

 time : O(n)
 space : O(1)
 重要！！典型DP的一道题目。
 https://www.youtube.com/watch?v=k-JYXpHXOcU
 Time: O(n), Space: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums == null || nums.length == 0) return 0;
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        // two chose:
        //1: rob i and i - 2
        //2: only rob i -1
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]);
    }
    return dp[nums.length - 1];
};

let num =  [1, 3, 2, 4, 1];
console.log(rob(num))