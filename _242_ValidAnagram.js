/**
 * 242. Valid Anagram
 * For example,
 s = "anagram", t = "nagaram", return true.
 s = "rat", t = "car", return false.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// method 1
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

// method 2
//time : O(m + n) = O(n), space : O(1)
var isAnagram1 = function(s, t) {
    if (s.length != t.length) {
        return false;
    }

    let count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        count[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    for (let num of count) {
        if (num != 0) return false;
    }
    return true;
}

console.log(isAnagram1("aab", "baa")); // true
