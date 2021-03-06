/**
 * * 66. Plus One
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

 You may assume the integer do not contain any leading zero, except the number 0 itself.

 The digits are stored such that the most significant digit is at the head of the list.

 case1 : 1011 1012
 case2 : 1099 1100
 case3 : 9999 10000

 time : O(n);
 space : O(n);
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0
        }
    }

    let res = new Array(len+1).fill(0);
    res[0] = 1
    return res;
};

let nums = [1,0,1,1];
console.log(plusOne(nums)); // [ 1, 0, 1, 2 ]
