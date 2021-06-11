/**
 *  * 80. Remove Duplicates from Sorted Array II (26. Remove Duplicates from Sorted Array: follow up)
 * Follow up for "Remove Duplicates":
 What if duplicates are allowed at most twice?

 For example,
 Given sorted array nums = [1,1,1,2,2,3],

 Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.

 case : [1,1,1,2,2,3]
 1,1,2,2,3
 c
 i
 result : [1,1,2,2,3]

 time: O(n);
 space: O(1);
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums == null || nums.length == 0) return 0;
    let count = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] != nums[count-2]) {
            nums[count++] = nums[i];
        }
    }
    return count;
};