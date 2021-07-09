# Leetcode刷题笔记（DP部分）

## S.70_Climbing Stairs

原题地址：https://leetcode.com/problems/climbing-stairs/

思路：

查资料，说这是一道典型的动态规划的题目。主要思想就是找出递推式，然后利用子问题的解来求最后的最优解。

一共有n层，要想爬到第n层，有两种方法。第一种，从第n-1层爬1步上来；第二种，从第n-2层爬2步上来。所以，假如从0层到n-1层有dp[n-1]种方法，从0层到n-2层有dp[n-2]中方法，那么到第n层的方法数，就是dp[n-1]+dp[n-2]种方法。因为从他们都可以到达第n层。

综上，推出的递推式是：dp[n] = dp[n-1] + dp[n-2]。如果梯子有1层或者2层，dp[1] = 1, dp[2] = 2，如果梯子有0层，自然dp[0] = 0 。

代码：

```javascript
/**
 * * 70. Climbing Stairs
 * You are climbing a stair case. It takes n steps to reach to the top.

 Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 Note: Given n will be a positive integer.

 fibonacci: 1 1 2 3
 Example 1:

 Input: 2
 Output:  2
 Explanation:  There are two ways to climb to the top.

 1. 1 step + 1 step
 2. 2 steps

 time : O(n)
 space : O(n)/O(1)

 time: O(2^n) 递归
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }else {
        return climbStairs(n-1) + climbStairs(n-2);
    }
};


var climbStairs = function(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    let cur = 2;
    let prev = 1;
    for(let i = 3; i <= n; i++) {
        cur = cur + prev;
        prev = cur - prev;
    }
    return cur;
}
```

## S.152_Maximum Product Subarray
**思路1**：
当下最大的乘积有可能是: 

1. 之前的最大的数*nums[i]

2. 之前的最小的数*nums[i] (如果nums[i]是负数)

3. 或者以上都不是的话就还有一种可能: nums[i]自己

```javascript
/**
 * 152. Maximum Product Subarray
 * For example, given the array [2,3,-2,4],
 the contiguous subarray [2,3] has the largest product = 6.

 time : O(n)
 space : O(1)
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let len = nums.length,
        prevMax = nums[0],
        prevMin = nums[0],
        result = nums[0];

    for (let i = 1; i < len; i ++) {
        let num = nums[i];
        currMax = Math.max(prevMax * num, num, prevMin * num);
        currMin = Math.min(prevMin * num, num, prevMax * num);

        prevMax = currMax;
        prevMin = currMin;

        result = Math.max(result, currMax)
    }
    return result;
};

let res = [-2,0,-1];
console.log(maxProduct(res));
```

## S.159. Longest Substring with At Most Two Distinct Characters
```javascript
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
```

## S.198. House Robber
```javascript
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
```
## S.213. House Robber II
```javascript
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

```
## S.256. Paint House
```javascript
/**
 * 256. Paint House
 * There are a row of n houses, each house can be painted with one of the three colors:
 * red, blue or green. The cost of painting each house with a certain color is different.
 * You have to paint all the houses such that no two adjacent houses have the same color.

 The cost of painting each house with a certain color is represented by a n x 3 cost matrix. For example,
 costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 with
 color green, and so on... Find the minimum cost to paint all houses.

 costs[i][j]
 i : house
 j : color : 3

 time : O(n)
 space : O(1)
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    if(costs == null || costs[0].length == 0) return 0;
    for (let i = 1; i < costs.length; i++) {
        costs[i][0] += Math.min(costs[i-1][1], costs[i-1][2]);
        costs[i][1] += Math.min(costs[i-1][0], costs[i-1][2]);
        costs[i][2] += Math.min(costs[i-1][0], costs[i-1][1]);
    }
    return Math.min(Math.min(costs[costs.length-1][0], costs[costs.length-1][1]), costs[costs.length-1][2]);
};

let costs = [[17,2,17],[16,16,5],[14,3,19]];
console.log(minCost(costs)); // 10
```

## S.322. Coin Change
```javascript
/**
 * 322. Coin Change
 * Return the fewest number of coins that you need to make up that amount.
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //dp[i] the fewest number of coins to make up i
    var dp = Array(amount + 1).fill(amount+1);
    //we can only use 0 coin to make up 0 amount
    dp[0] = 0;
    for(var i = 1; i <= amount; i++) {
        for(var coin of coins) {
            if(coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] < amount+1 ? dp[amount] : -1;
};

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
```

## S.518. Coin Change 2
```javascript
/**
 * 518. Coin Change 2
 * Return the number of combinations that make up that amount.
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * 最好理解的解释： https://www.youtube.com/watch?v=ruMqWViJ2_U
 * 思路：建立一个表格，不停的向上看，向左看。
 * 向上看就是，不包含当前的硬币，还要达到target. =》dp[C-1][A]
 * 向左看是就是，包含了当前的值，还要达到target. =》dp[C][A-Ci]
 * 公式: dp[C][A] = dp[C][A-Ci] + dp[C-1][A]
 * Amount:  | 0 | 1 | 2 | 3 | 4 | 5 |
 * Coins: 0 | 1   0   0   0   0   0
 *   (1)  1 | 1   1   1   1   1   1
 *   (2)  2 | 1   1   2   2   3   3
 *   (5)  3 | 1   1   2   2   3   4
 */
var change = function(amount, coins) {
    let n = coins.length;
    let dp  = new Array(n+1).fill(new Array(amount+1).fill(0));
        // fill first row
    for (let j = 1; j <= amount; j++) {
        dp[0][j] = 0;
    }
        // fill first column
    for (let i = 0; i <=n; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i-1]) {
                dp[i][j] = dp[i][j-coins[i-1]] + dp[i-1][j];
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][amount];
}

// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
//     5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
```