/**
 * 122. Best Time to Buy and Sell Stock II
 * Say you have an array for which the ith element is the price of a given stock on day i.

 Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However,
 you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

 case : [5, 1, 2, 3, 4]
           /     \
 -----   /        \
 有这三种情况，只有第二种情况才可能有买卖

 time : O(n);
 space : O(1);
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices == null || prices.length < 2) return 0;
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }
    return profit;
};