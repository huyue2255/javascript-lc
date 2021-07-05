/**
 * 256. Paint House
 * There are a row of n houses, each house can be painted with one of the three colors:
 * red, blue or green. The cost of painting each house with a certain color is different.
 * You have to paint all the houses such that no two adjacent houses have the same color.

 The cost of painting each house with a certain color is represented by a n x 3 cost matrix. For example,
 costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 with
 color green, and so on... Find the minimum cost to paint all houses.

 costs[i][j]
 i : house
 j : color : 3

 time : O(n)
 space : O(1)
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    if(costs == null || costs[0].length == 0) return 0;
    for (let i = 1; i < costs.length; i++) {
        costs[i][0] += Math.min(costs[i-1][1], costs[i-1][2]);
        costs[i][1] += Math.min(costs[i-1][0], costs[i-1][2]);
        costs[i][2] += Math.min(costs[i-1][0], costs[i-1][1]);
    }
    return Math.min(Math.min(costs[costs.length-1][0], costs[costs.length-1][1]), costs[costs.length-1][2]);
};

let costs = [[17,2,17],[16,16,5],[14,3,19]];
console.log(minCost(costs)); // 10