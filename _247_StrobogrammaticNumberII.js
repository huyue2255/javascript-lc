/**
 * 247. Strobogrammatic Number II
 * A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

 Find all strobogrammatic numbers that are of length = n.

 For example,
 Given n = 2, return ["11","69","88","96"].

 n = 3 :  ["101","609","808","906","111","619","818","916","181","689","888","986"]


 time : O(n^2) 不确定
 space : O(n)
 思路： https://www.youtube.com/watch?v=hM2WMOfht_g
 中间开花
 * @param {number} n
 * @return {string[]}
 */
function helper(res, cur, map, remain) {
    if (remain == 0) {
        res.push(cur);
        return;
    }

    for (let key of map.keys()) {
        if (remain == 2 && key == "0") continue;
        helper(res, key+cur+map.get(key),map, remain -2);
    }
}

var findStrobogrammatic = function(n) {
    let map = new Map();
    map.set(6,9);
    map.set(9,6);
    map.set(0,0);
    map.set(1,1);
    map.set(8,8);

    let res = [];
    let cur = "";
    if (n % 2 == 1) {
        helper(res, "0",map,n-1);
        helper(res, "8",map,n-1);
        helper(res, "1",map,n-1);
    } else {
        helper(res, cur,map,n);
    }
    return res;
};

console.log(findStrobogrammatic(1))