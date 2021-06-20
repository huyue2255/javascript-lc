/**
 * 119. Pascal's _120_Triangle II
 * [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
 ]
 * For example, given k = 3,
 Return [1,3,3,1].

 time : O(n^2)
 space : O(n)
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let numRows = rowIndex + 1
    let res = [];
    for (let i = 0; i < numRows; i++) {
        // insert
        res.splice(0,0,1);
        let size = list.length;
        for (let j = 1; j < size - 1; j++) {
            // replace
            res.splice(j,1,list[j] + list[j+1]);
        }
    }
    return res[rowIndex];
};

