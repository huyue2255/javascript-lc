/**
 * time : O(n)
 * space : O(n)
 * @param nums
 * @param target
 * @return
 */

var twoSum = function(nums, target) {
    let arr = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            arr[0] = map.get(target - nums[i]);
            arr[1] = i;
            break;
        }
        map.set(nums[i], i);
    }
    return arr;
};

console.log(twoSum([1, 2, 3, 7, 8], [9]));