/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
   if(matrix == null || matrix.length == 0) return;
   if (matrix[0] == null || matrix[0].length == 0) return;
   let m = matrix.length;
   let n = matrix[0].length;
   let row = false;
   let col = false;
   for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
         if (matrix[i][j] == 0) {
            matrix[0][j] = 0;
            matrix[i][0] = 0;
            if (i == 0) row = 0;
            if (j == 0) col = 0;
         }
      }
   }

   for (let i = 1; i < m; i++) {
      if (matrix[i][0] == 0) {
         for (let j = 0; j < n; j++) {
            matrix[i][j] = 0;
         }
      }
   }
   for (let j = 1; j < n; j++) {
      if (matrix[0][j] == 0) {
         for (let i = 0; i < m; i++) {
            matrix[i][j] = 0;
         }
      }
   }

   if (row) {
      for (let j = 0; j < n; j++) {
         matrix[0][j] = 0;
      }
   }
   if (col) {
      for (let i = 0; i < m; i++) {
         matrix[i][0] = 0;
      }
   }
};

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(matrix);
console.log(matrix);