/**
 * @param {number[]} nums
 * @return {number}
 */


const singleNumber = (nums) => {
    let set = new Set(nums);
    let res = [...set].reduce((acc, cur) => acc + cur);
    let total = res * 3;
    let result = nums.reduce((acc, cur) => acc + cur);
    let num = (total - result) / 2;
    return num;
};

let nums = [2,2,2,3];
console.log(singleNumber(nums));
