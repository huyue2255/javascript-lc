/**
 * 161. One Edit Distance
 * Given two strings S and T, determine if they are both one edit distance apart.

 1, abcre abere
 2, abdc abc
 3, abc abdc

 abc
 abcd

 time : O(n^2)
 space : O(1)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    let res;
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] != t[i]) {
            if (s.length == t.length) {
                res = s.substring(i+1) == t.substring(i+1);
                return res;
            } else if (s.length > t.length) {
                res = s.substring(i+1) == t.substring(i);
                return res;
            } else {
                res = s.substring(i) == t.substring(i+1);
                return res;
            }
        }
    }
    return Math.abs(s.length - t.length) == 1;
};

let str = "abc";
let str1 = "abccd";
console.log(isOneEditDistance(str,str1));