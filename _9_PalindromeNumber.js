/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const cur = x;
    var res = 0;
    if (x < 0) return false;
    while (x != 0) {
        res = x % 10 + res * 10;
        x = parseInt(x / 10);
    }
    return res == cur ? true : false;
};

console.log(isPalindrome(121));
