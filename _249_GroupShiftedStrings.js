/**
 * 249. Group Shifted Strings
 * Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd".
 * We can keep "shifting" which forms the sequence:

 "abc" -> "bcd" -> ... -> "xyz"
 Given a list of strings which contains only lowercase alphabets, group all strings
 that belong to the same shifting sequence.

 For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
 A solution is:

 [
 ["abc","bcd","xyz"],
 ["az","ba"],
 ["acef"],
 ["a","z"]
 ]

 time : (n * m)
 space : O(n)
 * @param {string[]} strings
 * @return {string[][]}
 */
function helper(s) {
    let dis = s[0].charCodeAt(0) - 'a'.charCodeAt(0);
    let carr = new Array(s.length);
    carr[0] = 'a';

    for (let i = 1; i < s.length; i++) {
        let c = s[i].charCodeAt(0) - dis;
        if (c < 'a'.charCodeAt(0)) {
            c += 26;
        }
        carr[i] = String.fromCharCode(c);
    }
    return carr.join('');
}

var groupStrings = function(strings) {
    let map = new Map();
    for (let s of strings) {
        let key = helper(s);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(s);
    }
    let res = [];
    for (let l of map.values()) {
        res.push(l);
    }
    return res;
};

let strings = ["abc","bcd","acef","xyz","az","ba","a","z"];
let strings1 = ["az","ba"];
let strings2 = ["acef"];

console.log(groupStrings(strings1))