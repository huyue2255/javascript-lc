/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if (nums == null || nums.length == 0) return false;
    let start = 0, end = nums.length - 1;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[start] == nums[mid] && nums[mid] == nums[end]) {
            start++;
            end--;
        } else if (nums[start] <= nums[mid]) {
            if (target >= nums[start] && target <= nums[mid]){
                end = mid;
            } else {
                start = mid;
            }
        } else {
            if (target >= nums[mid] && target <= nums[end]){
                start = mid;
            } else {
                end = mid;
            }
        }
    }
    if (nums[start] == target) return true;
    if (nums[end] == target) return true;

    return false;
};

let res = [0,0,1,1,2,0]; // line14: nums[start] <= nums[mid] 用于证明这里必须要有等于号。(没有等号这里就是： false)。33题也是有等于号的。
console.log(search(res,2));

