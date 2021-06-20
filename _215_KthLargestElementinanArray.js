/**
 * /**
 * 215. Kth Largest Element in an Array
 * 最坏：O(n^2) 平均：O(nlogn)
 * space : O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = nums.sort((a,b) => a-b);
    return nums[nums.length - k];
};





console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 3));