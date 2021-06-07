/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let s of tokens) {
        if (s == '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (s == '-') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b - a);
        } else if (s == '*') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a * b);
        } else if (s == '/') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(Math.trunc(b / a));
        } else {
            stack.push(+s);
        }
    }
    return stack.pop();
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))
console.log(Math.floor(6 / (-132)));