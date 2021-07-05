/**
 * 246. Strobogrammatic Number
 * A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

 Write a function to determine if a number is strobogrammatic. The number is represented as a string.

 For example, the numbers "69", "88", and "818" are all strobogrammatic.

 time : O(n)
 space : O(n)
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    let map = new Map();
    map.set(6,9);
    map.set(9,6);
    map.set(0,0);
    map.set(1,1);
    map.set(8,8);

    let left = 0;
    let right = num.length - 1;
    while (left <= right) {
        // 特别要注意这里。 转化 string => number
        if (!map.has(Number(num[left]))) {
            return false;
        }
        if (map.get(Number(num[left])) != Number(num[right])) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
console.log(isStrobogrammatic('69')); // true