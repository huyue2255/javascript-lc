/**
 * 169. Majority Element
 * Given an array of size n, find the majority element. The majority element is the element
 * that appears more than ⌊ n/2 ⌋ times.

 You may assume that the array is non-empty and the majority element always exist in the array
 * @param {number[]} nums
 * @return {number}
 */
// time : O(nlogn) space : O(1)
var majorityElement1 = function(nums) {
    let arr = nums.sort();
    return arr[Math.floor(nums.length / 2)];
};


// Hashmap: O(n) space : O(n)
var majorityElement2 = function(nums) {
    let map = new Map();
    let res = 0;
    for (let num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }

        if (map.get(num) > nums.length / 2) {
            res = num;
            break;
        }
    }
    return res;
};

// Moore voting algorithm => 很难理解
// 每次都找出一对不同的元素，从数组中删掉，直到数组为空或只有一种元素。
// 不难证明，如果存在元素e出现频率超过半数，那么数组中最后剩下的就只有e。
// [1,2,3,3,3]
// time : O(n) space : O(1)
var majorityElement3 = function(nums) {

};

console.log(majorityElement2([1,2,2,2,1]))