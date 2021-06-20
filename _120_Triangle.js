/**
 * 120. Triangle
 * Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers
 * on the row below.

 For example, given the following triangle
 [
    [2],
   [3,4],
   [6,5,7],
 [4,1,8,3]
 ]
 The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

 i : j
 i + 1 : j, j + 1

 res = [4, 1, 8, 3, 0]
 res = [7, 6, 10]
 res = [9, 10]
 res = [2]

 time : O(n^2)
 space : O(n)
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let res = new Array(triangle.length + 1).fill(0);
    for (let i = triangle.length -1; i >= 0;i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            res[j] = Math.min(res[j], res[j+1]) + triangle[i][j];
        }
    }
    return res[0];
};