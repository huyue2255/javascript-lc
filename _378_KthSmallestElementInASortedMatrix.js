/**
 * 378. Kth Smallest Element in a Sorted Matrix
 * Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 * Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
 * Output: 13
 * Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// Method 1:
var kthSmallest = function (matrix, k) {
    return matrix.flatMap(x => x).sort((a, b) => a - b)[k - 1]
};
let matrix = [[1,5,9],[10,11,13],[12,13,15]]
console.log(kthSmallest(matrix, 8))


// Method 2:
var singleArray = function(arr) {
    let size = arr.length;
    let oneDarray = [];
    for(let i = 0; i< size; i++) {
        oneDarray.push(...arr[i]);
    }
    return oneDarray;
}


