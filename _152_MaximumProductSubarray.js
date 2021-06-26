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
    if (nums == 0 || nums.length == 0) return 0;
    let max = nums[0];
    let min = nums[0];
    let res = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let temp = max;
        max = Math.max(max * nums[i], min * nums[i], nums[i]);
        min = Math.min(temp * nums[i], min * nums[i], nums[i]);
        res = Math.max(max, res);
    }
    return res;
};

var maxProduct1 = function(nums) {
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