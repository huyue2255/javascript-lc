var isValid = function(s) {
    let list = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    };

    let stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        if (stack.length != 0) {
            if (stack[stack.length - 1] == list['s[i]']) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length == 0 ? true : false;
}

console.log(isValid('[[]]{}'));