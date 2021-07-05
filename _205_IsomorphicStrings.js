/**
 * 205. Isomorphic Strings
 * For example,
 Given "egg", "add", return true.

 Given "foo", "bar", return false.

 Given "paper", "title", return true.

 egg add
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// time : O(n^2) space : O(1)
var isIsomorphic = function(s, t) {
    if (t == null || s == null) return true;
    if (t.length != s.length) return false;
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        let a = s[i];
        let b = t[i];
        if (!map.has(a)) {
            if ([...map.values()].includes(b)) {
                return false;
            } else {
                map.set(a, b);
            }
        } else {
           if (map.get(a) == b){
               continue;
           } else {
               return false;
           }
        }
    }
    return true;
};

let s = 'foo';

let t = 'abc'
console.log(isIsomorphic(s,t))