/**
 * 221. Maximal Square
 * Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

 For example, given the following matrix:

 1 0 1 0 0
 1 0 1 1 1
 1 1 1 1 1
 1 0 0 1 0
 Return 4.

 time : O(m * n)
 space : O(m * n)
 思路：最大的二维矩阵
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(!matrix.length) return 0;
    const R_NUM = matrix.length, C_NUM = matrix[0].length;
    // const dp = Array.from({length: R_NUM+1}, () => Array(C_NUM+1).fill(0));  // output: 4

    const dp = [...Array(R_NUM+1)].map(x=>Array(C_NUM+1).fill(0))
    // let dp = new Array(R_NUM+1).fill(new Array(C_NUM+1).fill(0)); // output: 9
    let maxLen = 0;
    for(let r = 1; r <= R_NUM; r++) {
        for(let c = 1; c <= C_NUM; c++) {
            if(matrix[r-1][c-1] == 1) {
                dp[r][c] = Math.min(dp[r-1][c], dp[r][c-1], dp[r-1][c-1]) + 1;
                maxLen = Math.max(maxLen, dp[r][c]);
            }
        }
    }
    return maxLen**2;
};

let matrix = [[1,1,1],[1,1,1],[1,0,1]];
console.log(maximalSquare(matrix)); // 4