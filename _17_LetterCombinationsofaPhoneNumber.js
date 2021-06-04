/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length == 0) return [];

    let M = new Map();
    M.set('2', ['a', 'b', 'c']);
    M.set('3', ['d', 'e', 'f']);
    M.set('4', ['g', 'h', 'i']);
    M.set('5', ['j', 'k', 'l']);
    M.set('6', ['m', 'n', 'o']);
    M.set('7', ['p', 'q', 'r', 's']);
    M.set('8', ['t', 'u', 'v']);
    M.set('9', ['w', 'x', 'y', 'z']);

    let prod = (a, b) => {
        let arr = [];
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                arr.push([...a[i], ...b[i]]);
            }
        }
        return arr;
    }

    let res = M.get(digits[0]);
    for (let i = 1; i < digits.length; i++) {
        res = prod(res, M.get(digits[i]));
    }
    return res.map(i => [...i].join(''));
};



console.log(letterCombinations('23'));


