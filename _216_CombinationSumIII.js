/**
 * 216. Combination Sum III
 * Find all possible combinations of k numbers that add up to a number n,
 * given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.


 Example 1:

 Input: k = 3, n = 7

 Output:

 [[1,2,4]]

 Example 2:

 Input: k = 3, n = 9

 Output:

 [[1,2,6], [1,3,5], [2,3,4]]

 time : O(2^n)
 space : O(n);
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function helper(res, list, k, n, start) {

    if (k == 0 && n == 0) {
        res.push(list.slice());
        return;
    }
    // 这里是值得注意的是所有数字小于9
    // for (let i = start; i <= n; i++) { 否则的话就是这行代码
    for (let i = start; i <= 9; i++) {
        list.push(i);
        helper(res, list,k-1,n-i,i+1);
        list.pop();
    }
}

var combinationSum3 = function(k, n) {
    let res = [];
    helper(res, [], k, n, 1);
    return res;
};

console.log(combinationSum3(3,7)); // [ [ 1, 2, 4 ] ]
