/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Input
//     [1,2,0]
// Output
//     [1,0,2]
// Expected
//     [0,1,2]

function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

var sortColors = function(nums) {
    let left  = 0;
    let right = nums.length - 1;
    let index = 0;
    while (index <= right) {
        if (nums[index] == 0) {
            swap(nums, index++, left++);
        } else if(nums[index] == 1) {
            index++;
        } else {
            swap(nums, index, right--);
        }
    }
};