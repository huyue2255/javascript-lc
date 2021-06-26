/**
 * 172. Factorial Trailing Zeroes
 * Given an integer n, return the number of trailing zeroes in n!.

 Note: Your solution should be in logarithmic time complexity.


 time : O(logn)
 space : O(n)

 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let num = Math.floor(n / 5);
    return n == 0 ? 0 : Math.floor(num) + trailingZeroes(num);
};