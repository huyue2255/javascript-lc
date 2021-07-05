
/**
 * 322. Coin Change
 * Return the fewest number of coins that you need to make up that amount.
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //dp[i] the fewest number of coins to make up i
    var dp = Array(amount + 1).fill(amount+1);
    //we can only use 0 coin to make up 0 amount
    dp[0] = 0;
    for(var i = 1; i <= amount; i++) {
        for(var coin of coins) {
            if(coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] < amount+1 ? dp[amount] : -1;
};

