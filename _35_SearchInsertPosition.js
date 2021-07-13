/**
 *
 Here are few examples.
 [1,3,5,6] 5   2
 output : 2   1

 time : O(logn);
 space : O(1);

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};

console.log(searchInsert([1,3], 3))