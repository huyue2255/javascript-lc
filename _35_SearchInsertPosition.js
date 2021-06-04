/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let pos = null;
    let start = 0;
    let end = nums.length - 1;

    while(start + 1 < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] >= target) {
            end = mid;
        } else {
            start = mid;
        }
    }
    if (nums[start] == target) return start;
    if (nums[end] == target) return end;

    // console.log(start);
    // console.log(end);


    if (end == nums.length - 1) {
        if (nums[end] < target) {
            pos = end + 1;
        } else if (nums[end] > target && target > nums[start]){
            pos = end;
        } else {
            pos = start;
        }
    } else {
        if (nums[start] > target) {
            pos = start;
        } else {
            pos = end;
        }
    }

    return pos;
};

console.log(searchInsert([1,3], 0))