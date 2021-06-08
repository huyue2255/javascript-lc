/**
 * 54. Spiral Matrix
 * For example,
 Given the following matrix:

 [
         [0,0], [0,1] , [0,2]

         [ 1, 2, 3, 4 ], => [0, 3]
  [1, 0]       [ 5, 6, 7, 8 ], => [1, 3]
               [ 9, 10, 11, 12 ] => [2,,3]

       [2,0], [2,1], [2,2]

 ]
 You should return [1,2,3,6,9,8,7,4,5].

 time : O(n * m)     n * m : 总元素个数
 space : O(n * m)

 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    if (matrix == null || matrix.length == 0 || matrix[0] == null || matrix[0].length == 0) {
        return res;
    }

    let rowBegin = 0;
    let rowEnd = matrix.length - 1;
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;

    while(rowBegin <= rowEnd && colBegin <= colEnd) {
        for (let i = rowBegin; i <= colEnd; i++) {
            res.push(matrix[rowBegin][i]);
        }
        rowBegin++;

        for (let i = rowBegin; i <= rowEnd; i++) {
            res.push(matrix[i][colEnd]);
        }
        colEnd--;
        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                res.push(matrix[rowEnd][i])
            }
        }
        rowEnd--;
        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                res.push(matrix[i][colBegin]);
            }
        }
        colBegin++;
    }
    return res;
};
let target = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(target));

