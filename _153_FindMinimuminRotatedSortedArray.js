/**
 * 153. Find Minimum in Rotated Sorted Array
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 *
 4 5 6  7  0 1 2
       mid
 5 6 0  1  2 3 4
       mid

 2 1

 * time : O(logn)
 * space : O(1);
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums == null || nums.length == 0) return -1;
    let start = 0;
    let end = nums.length - 1;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        console.log(mid)
        if (nums[mid] < nums[end]) {
            end = mid;
        } else {
            start = mid + 1;
            console.log(start)
        }
    }
    console.log(nums[start])
    if (nums[start] < nums[end]) {
        return nums[start];
    } else {
        return nums[end];
    }
};

let res = [3,4,5,1,2];
console.log(findMin(res))