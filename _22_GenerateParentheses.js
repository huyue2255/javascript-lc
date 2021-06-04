var generateParenthesis = function(n) {
    let res = [];
    const helper = (s, left, right) => {
        if (s.length == 2*n) {
            res.push(s);
        }

        if (left < n) {
            helper(s+'(',left+1, right);
        }

        if (left > right) {
            helper(s+')',left, right+1);
        }
    }

    helper('',0,0);

    return res;
};

console.log(generateParenthesis(2))