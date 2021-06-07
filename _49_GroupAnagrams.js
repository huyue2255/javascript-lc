/**
 * @param {string[]} strs
 * @return {string[][]}
 * Counting sort 思想 - 存字母出现的次数
 * HashMap, counting 为key,字符串为value
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let sortedStr = str.split('').sort().join('');
        if(!map[sortedStr]) {
            map[sortedStr] = [str]
        } else {
            map[sortedStr].push(str);
        }
    }
    console.dir(Object.keys(map))
    return Object.values(map);
};

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs))