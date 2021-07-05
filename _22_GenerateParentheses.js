function helper (n, s, left, right, res) {
    if (s.length == 2*n) {
        res.push(s);
    }

    if (left < n) {
        helper(n,s+'(',left+1, right, res);
    }

    if (left > right) {
        helper(n, s+')',left, right+1, res);
    }
}

var generateParenthesis = function(n) {
    let res = [];
    helper(n,'',0,0, res);
    return res;
};

console.log(generateParenthesis(3))