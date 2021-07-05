/**
 * 259. 3Sum Smaller
 * nums = [-2, 0, 1, 3], and target = 2.
 * time : O(n^2);
 * space : O(1);
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    let res = 0;
    nums.sort((a,b) => a-b);
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right) {
            if (nums[i] + nums[left] + nums[right] < target) {
                res += right - left;
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
};
let nums = [3,1,0,-2];
console.log(threeSumSmaller(nums, 4)); // 3