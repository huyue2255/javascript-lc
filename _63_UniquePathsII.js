/**
 * * 63. Unique Paths II
 * Follow up for "Unique Paths":

 Now consider if some obstacles are added to the grids. How many unique paths would there be?

 An obstacle and empty space is marked as 1 and 0 respectively in the grid.

 For example,
 There is one obstacle in the middle of a 3x3 grid as illustrated below.

 [
 [0,0,0],
 [0,1,0],
 [0,0,0]
 ]
 The total number of unique paths is 2.

 time : O(m * n)
 space : O(n)
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// method 1: time: O(m*n), space:O(m*n)
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     const m = obstacleGrid.length,
//           n = obstacleGrid[0].length;
//     if(obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
//         return 0;
//     }

//     for(let i = 0; i < m; ++i) {
//         for(let j = 0; j < n; ++j) {
//             if(obstacleGrid[i][j] === 1) {
//                 obstacleGrid[i][j] = 0;
//             } else if(i === 0 && j === 0) {
//                 obstacleGrid[i][j] = 1;
//             } else if(i === 0) {
//                 obstacleGrid[i][j] = obstacleGrid[i][j - 1];
//             } else if(j === 0) {
//                 obstacleGrid[i][j] = obstacleGrid[i - 1][j];
//             } else {
//                 obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
//             }
//         }
//     }
//     return obstacleGrid[m - 1][n - 1];
// };

    // method 2: time: O(m*n), space:O(n)
var uniquePathsWithObstacles = function(obstacleGrid) {
    let length = obstacleGrid[0].length;
    let res = new Array(length).fill(0);
    res[0] = 1;
    for (let i = 0; i < obstacleGrid.length; i++) {
        for (let j = 0; j < obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j] == 1) {
                res[j] = 0;
            } else if (j>0){
                res[j] += res[j-1];
            }
        }
    }
    return res[length -1];
};