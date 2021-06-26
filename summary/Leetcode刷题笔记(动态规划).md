# Leetcode刷题笔记（DP部分）

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