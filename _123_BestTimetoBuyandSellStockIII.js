/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy1 = -Infinity, buy2 = -Infinity;
    let sell1 = 0, sell2 = 0;
    for (price of prices) {
        buy1 = Math.max(buy1, - price);
        sell1 = Math.max(sell1, buy1 + price);
        buy2 = Math.max(buy2, sell1 - price);
        sell2 = Math.max(sell2, buy2 + price);
    }
    return sell2;
};


let prices = [7,6,4,3,1];
console.log(maxProfit(prices));