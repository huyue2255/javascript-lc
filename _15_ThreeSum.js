/**
 *
 For example, given array S = [-1, 0, 1, 2, -1, -4],
 A solution set is:
 [
 [-1, 0, 1],
 [-1, -1, 2]
 ]

 [-4, -1, -1, 0, 1, 2]

 time : O(n^2);
 space : O(n^2);
 * @param nums
 * @return
 */

var threeSum = function(nums) {
    let results = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        let low = i + 1;
        let high = nums.length - 1;
        let sum = 0 - nums[i];

        while (low < high) {
            if (nums[low] + nums[high] === sum) {
                let res = [nums[i], nums[low], nums[high]];
                results.push(res);
                while(low < high && nums[low] == nums[low+1]) low++;
                while(low < high && nums[high] == nums[high-1]) high--;
                low++;
                high--;
            } else if (nums[low] + nums[high] < sum){
                low++;
            } else {
                high--;
            }
        }
    }
    return results;
};

console.log(threeSum([-2,-1,-1,1,1,2,2]));