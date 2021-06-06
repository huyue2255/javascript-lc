
var searchMatrix = function(matrix, target) {
    let res = [].concat(...matrix);
    return res.includes(target);
};

var searchMatrix1 = function(matrix, target) {
    if (matrix == 0 || matrix.length == 0) return false;
    let row = matrix.length;
    let col = matrix[0].length;
    let begin = 0;
    let end = row * col - 1;
    while(begin <= end) {
        let mid = begin + Math.floor((end - begin) / 2);
        let value = matrix[Math.floor(mid/col)][mid%col];
        if (value == target) {
            return mid;
        } else if (value < target) {
            begin = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
};



let nums = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(searchMatrix1(nums, 0));