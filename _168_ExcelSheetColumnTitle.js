/**
 * 168. Excel Sheet Column Title
 * 1 -> A
 2 -> B
 3 -> C
 ...
 26 -> Z
 27 -> AA
 28 -> AB

 time : O(logn)
 space : O(n)
 值得注意的地方，要把n--.因为是从A开始的
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let arr = [];
    while (columnNumber > 0) {
        columnNumber--;
        arr.push(String.fromCharCode(('A'.charCodeAt(0) + columnNumber % 26)));
        columnNumber = Math.floor(columnNumber / 26);
    }
    return arr.reverse().join('');
};
'ABC'.charCodeAt(0)  // returns 65
let res = '28';
console.log(convertToTitle(res))