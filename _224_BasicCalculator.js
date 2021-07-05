/**
 * 224. Basic Calculator

 "1 + 1" = 2
 " 2-1 + 2 " = 3
 "(1+(4+5+2)-3)+(6+8)" = 23

 time : O(n)
 space : O(n)
 * @param {string} s
 * @return {number}
 */

function isNumber(character) {
    if (character >= 0 && character <= 9) {
        return true;
    }
    return false;
}

var calculate = function (s) {
    let stack = [];
    let sign = 1;
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (isNumber(s[i])) {
            let num = "";
            num += s[i];
            while (i + 1 < s.length && isNumber(s[i + 1])) {
                num += s[i + 1];
                i++;
            }
            res += num * sign;
        } else if (s[i] == '+') {
            sign = 1;
        } else if (s[i] == '-') {
            sign = -1;
        } else if (s[i] == '(') {
            stack.push(res);
            stack.push(sign);
            res = 0;
            sign = 1;
        } else if (s[i] == ')') {
            res = res * stack.pop() + stack.pop();
        }
    }
    return res;
};

console.log(calculate('(1+1) *2'));