/**
 * 202. Happy Number
 * Example: 19 is a happy number

 1^2 + 9^2 = 82
 8^2 + 2^2 = 68
 6^2 + 8^2 = 100
 1^2 + 0^2 + 0^2 = 1

 time : 不知道
 space : O(n)
 如何知道他在循环呢？如何已经加入过了，就是表示进入循环。

 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    while (n != 1) {
        let temp = 0;
        while (n != 0) {
            let digit = n % 10;
            temp += digit * digit;
            n = Math.floor(n / 10);
        }
        if (set.has(temp)) {
            return false;
        } else {
            set.add(temp);
        }
        n = temp;
    }
    return true;
};