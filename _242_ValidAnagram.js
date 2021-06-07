/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (t.length != s.length) return false;

    let arr = t.split('');
    for (let i = 0; i < s.length; i++) {
        if (arr.indexOf(s[i]) == -1) {
            return false;
        } else {
            arr.splice(arr.indexOf(s[i]), 1)
        }
    }
    return true;
};

console.log(isAnagram("aa", "a"));