/**
 * 167. Two Sum II - Input array is sorted
 Input: numbers={2, 7, 11, 15}, target=9
 Output: index1=1, index2=2

 time : O(n)
 space : O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums == null || nums.length < 2) {
        return new Array(-1,-1);
    }

    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right]
        if (sum == target) {
            return new Array(left+1, right+1);
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return new Array(-1, -1);
};

let res = [2,7,11,15]
console.log(twoSum(res,9))