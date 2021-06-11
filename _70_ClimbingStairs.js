/**
 * * 70. Climbing Stairs
 * You are climbing a stair case. It takes n steps to reach to the top.

 Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 Note: Given n will be a positive integer.

 fibonacci: 1 1 2 3
 Example 1:

 Input: 2
 Output:  2
 Explanation:  There are two ways to climb to the top.

 1. 1 step + 1 step
 2. 2 steps

 time : O(n)
 space : O(n)/O(1)

 time: O(2^n) 递归
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     if (n <= 2) {
//         return n;
//     }else {
//         return climbStairs(n-1) + climbStairs(n-2);
//     }
// };


var climbStairs = function(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    let cur = 2;
    let prev = 1;
    for(let i = 3; i <= n; i++) {
        cur = cur + prev;
        prev = cur - prev;
    }
    return cur;
}