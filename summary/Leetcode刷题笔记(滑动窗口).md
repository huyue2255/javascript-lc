## S.209. Minimum Size Subarray Sum
```javascript
/**
 * 209. Minimum Size Subarray Sum
 * Given an array of n positive integers and a positive integer s, find the
 * minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

 For example, given the array [2,3,1,2,4,3] and s = 7,
 the subarray [4,3] has the minimal length under the problem constraint.

 time : O(n)
 space : O(1)
 思路： 滑动窗口的写法。非常有意思。
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let res = Infinity;
    let left = 0, sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (left <= i && sum >= s) {
            res = Math.min(res, i - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return res;
};
```