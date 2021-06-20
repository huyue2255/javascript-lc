/**
 * 121. Best Time to Buy and Sell Stock
 * Say you have an array for which the ith element is the price of a given stock on day i.

 If you were only permitted to complete at most one transaction (ie,
 buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 Input: [7, 1, 5, 3, 6, 4]
 Output: 5

 max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)

 time : O(n);
 space : O(1);
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices == null || prices.length < 2) return 0;
    let min = prices[0];
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        profit = Math.max(profit, prices[i] - min);
    }
    return profit;
};
