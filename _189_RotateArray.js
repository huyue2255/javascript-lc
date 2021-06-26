/**
 * 189. Rotate Array
 * Rotate an array of n elements to the right by k steps.

 For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

 Note:
 Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// ======================================================Method 1===============================================================
//time : O(n)  space : O(n)
var rotate = function(nums, k) {
    let temp = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        // 注意这里也是一个技巧 （0 + 3 => k） % 7
        // [1,2,3,4,5,6,7]
        // [      1,2,3,4
        temp[(i+k) % nums.length] = nums[i];
    }
    // nums = [...temp];
    for (let i = 0; i < nums.length; i++) {
        nums[i] = temp[i];
    }
    console.log(nums);
};

let arr = [1,2,3,4,5,6,7];
rotate(arr,3);

// ======================================================Method 2===============================================================
//time : O(n)  space : O(1)
/**
 Original List                   : 1 2 3 4 5 6 7
 After reversing all numbers     : 7 6 5 4 3 2 1
 After reversing first k numbers : 5 6 7 4 3 2 1
 After revering last n-k numbers : 5 6 7 1 2 3 4 --> Result
 */
function helper(s, start, end) {
    while (start < end) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
    return s;
}
var rotate = function(nums, k) {
    k = k % nums.length;
    helper(nums, 0, nums.length-1);
    helper(nums,0,k-1);
    helper(nums,k, nms.length-1);
};