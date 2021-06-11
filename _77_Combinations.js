/**
 * * 77. Combinations
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

 For example,
 If n = 4 and k = 2, a solution is:

 [
 [2,4],
 [3,4],
 [2,3],
 [1,2],
 [1,3],
 [1,4],
 ]
 [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

 time : O(n^min{k,n-k})
 space : O(n);
 http://stackoverflow.com/questions/31120402/complexity-when-generating-all-combinations
 back-tracking
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

function helper(res, list, n, k, start) {
    if (k == 0) {
        res.push(list.slice());
        return;
    }

    for (let i = start; i <= n; i++) {
        list.push(i);
        helper(res, list, n, k-1, i+1);
        list.pop();
    }

}

var combine = function(n, k) {
    let res = [];
    helper(res, [],n,k,1);
    return res;
};

console.log(combine(4,2))