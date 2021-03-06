/**
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

 Do not allocate extra space for another array, you must do this in place with constant memory.

 For example,
 Given input array nums = [1,1,2],

 Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

 case : [1,1,2,2,3,4,5,6]
 1,2,3,4,5,6
 c
 i
 result : [1,2,3,4,5,6]

 time : O(n);
 space : O(1);

 * @param nums
 * @return
 */

var removeDuplicates = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[count-1]) {
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};

console.log(removeDuplicates([1,2,2,2,2,1,1,1,1,4]));

