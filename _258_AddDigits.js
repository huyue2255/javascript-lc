/**
 * 258. Add Digits
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

 For example:

 Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

 time : O(logn)
 space : O(1)
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num >= 10) {
        num = num % 10 + Math.floor(num/10);
    }
    return num;
};

console.log(addDigits(10));