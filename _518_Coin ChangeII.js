/**
 * 518. Coin Change 2
 * Return the number of combinations that make up that amount.
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * 最好理解的解释： https://www.youtube.com/watch?v=ruMqWViJ2_U
 * 思路：建立一个表格，不停的向上看，向左看。
 * 向上看就是，不包含当前的硬币，还要达到target. =》dp[C-1][A]
 * 向左看是就是，包含了当前的值，还要达到target. =》dp[C][A-Ci]
 * 公式: dp[C][A] = dp[C][A-Ci] + dp[C-1][A]
 * Amount:  | 0 | 1 | 2 | 3 | 4 | 5 |
 * Coins: 0 | 1   0   0   0   0   0
 *   (1)  1 | 1   1   1   1   1   1
 *   (2)  2 | 1   1   2   2   3   3
 *   (5)  3 | 1   1   2   2   3   4
 */
var change = function(amount, coins) {
    let n = coins.length;
    let dp  = new Array(n+1).fill(new Array(amount+1).fill(0));
        // fill first row
    for (let j = 1; j <= amount; j++) {
        dp[0][j] = 0;
    }
        // fill first column
    for (let i = 0; i <=n; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i-1]) {
                dp[i][j] = dp[i][j-coins[i-1]] + dp[i-1][j];
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][amount];
}

// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
//     5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1