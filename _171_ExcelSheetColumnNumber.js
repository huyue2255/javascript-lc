/**
 * 171. Excel Sheet Column Number
 * For example:

 A -> 1
 B -> 2
 C -> 3
 ...
 Z -> 26
 AA -> 27
 AB -> 28

 AB -> 28
 res = 1 * 26 + 2 = 28

 time : O(n)
 space : O(1)
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        res = res * 26 + (columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1);
    }
    return res;
};

let columnTitle = "AA";
console.log(titleToNumber(columnTitle))
console.log('B' - 'A')
