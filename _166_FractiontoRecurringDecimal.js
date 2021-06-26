/**
 * 166. Fraction to Recurring Decimal
 * Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

 If the fractional part is repeating, enclose the repeating part in parentheses.

 For example,

 Given numerator = 1, denominator = 2, return "0.5".
 Given numerator = 2, denominator = 1, return "2".
 Given numerator = 2, denominator = 3, return "0.(6)".

 0.2(34)

 1, 0 + - 越界
 2, 整数
 3, 小数 -> 循环
 思路：就是一道简单的实现题目。1。确定符号。 2。只要出现相同的数字就是开始循环的地方。
 time : O(logn)
 space : O(n)
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator == 0) return "0";
    let res = [];
    let map = new Map();
    let sign = (numerator > 0) ^ (denominator > 0) ?  "-" : "";
    let num = Math.abs(numerator);
    let den = Math.abs(denominator);
    res.push(sign);

    res.push(Math.floor( num / den));
    num %= den;
    if (num == 0) {
        return res.join('');
    }

    res.push(".");
    map.set(num,res.length);
    while (num != 0) {
        num *= 10;
        res.push(Math.floor(num / den));
        num %= den;
        if (map.has(num)) {
            let index = map.get(num);
            res.splice(index, 0, "(");
            res.push(")");
            break;
        } else {
            map.set(num, res.length);
        }
    }
    return res.join('');
};

console.log(fractionToDecimal(1,2))