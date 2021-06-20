/**
 * 135. Candy
 * There are N children standing in a line. Each child is assigned a rating value.

 You are giving candies to these children subjected to the following requirements:

 Each child must have at least one candy.
 Children with a higher rating get more candies than their neighbors.
 What is the minimum candies you must give?

 ratings:     [4, 5, 1, 1, 3, 7]
 candies:     [1, 1, 1, 1, 1, 1]

 ratings:     [4, 5, 1, 1, 3, 7]
 candies:     [1, 2, 1, 1, 2, 3]

 ratings:     [4, 5, 1, 1, 3, 7]
 candies:     [1, 2, 1, 1, 2, 3]

 time : O(n)
 space : O(n)
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let candies = new Array(ratings.length).fill(1);
    for (let i = 1; i < candies.length; i++) {
        if (ratings[i] > ratings[i-1]) {
            candies[i] = candies[i-1] + 1;
        }
    }

    for (let i = candies.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1] && candies[i] <= candies[i+1]) {
            candies[i] = candies[i+1] + 1;
        }
    }

    let res = 0;
    for (let ele of candies) {
        res += ele;
    }
    return res;
};

console.log(candy([1,0,2]))