/**
 * 254. Factor _77_Combinations
 * Numbers can be regarded as product of its factors. For example,

 8 = 2 x 2 x 2;
 = 2 x 4.
 Write a function that takes an integer n and return all possible combinations of its factors.

 Note:
 You may assume that n is always positive.
 Factors should be greater than 1 and less than n.
 Examples:
 input: 1
 output:
 []
 input: 37
 output:
 []
 input: 12
 output:
 [
 [2, 6],
 [2, 2, 3],
 [3, 4]
 ]
 input: 32
 output:
 [
 [2, 16],
 [2, 2, 8],
 [2, 2, 2, 4],
 [2, 2, 2, 2, 2],
 [2, 4, 4],
 [4, 8]
 ]
 * @param {number} n
 * @return {number[][]}
 */
function helper(res, list, n, start) {
    if (n == 1) {
        if (list.length > 1) {
            res.push(list.slice());
            return;
        }
    }

    for (let i = start; i <= n; i++) {
        if (n % i == 0) {
            list.push(i);
            helper(res, list, n / i, i);
            list.pop();
        }
    }
}

var getFactors = function(n) {
    let res = [];
    helper(res, [], n, 2);
    return res;
};

console.log(getFactors(4))