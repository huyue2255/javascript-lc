/**
 * * 67. Add Binary
 * Given two binary strings, return their sum (also a binary string).

 For example,
 a = "11"
 b = "1"
 Return "100".

 time : O(max(m,n));
 space : O(n);
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = [];
    let i = a.length-1;
    let j = b.length-1;
    let remainder = 0;
    while (i >= 0 || j >= 0) {
        let sum = remainder;
        if (i >= 0) sum = sum + parseInt(a[i]);
        if (j >= 0) sum = sum + parseInt(b[j]);
        res.push(parseInt(sum % 2));
        remainder = parseInt(sum / 2);
        i--;
        j--;
    }
    if (remainder != 0) {
        res.push(remainder);
    }
    return res.reverse().join('');
};

let a = '1010';
let b = '1011';
console.log(addBinary(a, b));


