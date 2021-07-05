
## S.151_Reverse Words in a String
**思路1**：
这道题目主要是数组每个单词会有空格。

```javascript
/**

Input: "a good   example"
Output: "example   good a"
Expected: "example good a"
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 字符串头尾去除空格。
 let arr = s.trim().split(' ');
    // 这一步就是去除数组里面的空格。
 let myArray = arr.filter(x => x)
    
 let res = myArray.reverse();
 return res.join(' ');
};
```

##S.186. Reverse Words in a String II
```javascript

/**
* 186. Reverse Words in a String II
* For example,
 * Given s = "the sky is blue",
 * return "blue is sky the"
 * time : O(n) space : O(1)
**/

function helper(s, start, end) {
    while (start < end) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
    return s;
}


var reverseWords = function(s) {
    s.reverse();
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            helper(s, index, i-1);
            index = i+1;
        }
    }
    helper(s,index, s.length-1)
};
let s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]

// let res = s.join('').split(' ').reverse().join().split('');

// console.log(helper(s, 5,6));
reverseWords(s)
console.log(s); // ['b', 'l', 'u', 'e',' ', 'i', 's', ' ','s', 'k', 'y', ' ','t', 'h', 'e']


```

## S.161. One Edit Distance

```javascript
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
```

## S.205. Isomorphic Strings
```javascript
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
```

## S.242. Valid Anagram
```javascript
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
```

## S.243. Shortest Word Distance
```javascript
/**
 * 243. Shortest Word Distance
 * Given a list of words and two words word1 and word2, return the shortest distance
 * between these two words in the list.

 For example,
 Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

 Given word1 = “coding”, word2 = “practice”, return 3.
 Given word1 = "makes", word2 = "coding", return 1.

 Note:
 You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

 PS：这里忽略了equals的时间复杂度，要不equals也是 O(n)

 space : O(1);
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let res = wordsDict.length;
    let a = -1;
    let b = -1;
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] == word1) {
            a = i;
        } else if (wordsDict[i] == word2) {
            b = i;
        }

        if (a != -1 && b != -1) {
            res = Math.min(res, Math.abs(a-b));
        }
    }
    return res;
};

let wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding";

console.log(shortestDistance(wordsDict, word1, word2)); // 1
```

## S.244. Shortest Word Distance II
```javascript
/**
 * 244. Shortest Word Distance II
 *This is a follow up of Shortest Word Distance. The only difference is now you are given the list of words and your method will be called repeatedly many times with different parameters. How would you optimize it?

 Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list.

 For example,
 Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

 Given word1 = “coding”, word2 = “practice”, return 3.
 Given word1 = "makes", word2 = "coding", return 1.


 space : O(n);
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.map = new Map();
    for (let i = 0; i < wordsDict.length; i++) {
        if (this.map.has(wordsDict[i])) {
            this.map.get(wordsDict[i]).push(i);
        } else {
            let list = [];
            list.push(i);
            this.map.set(wordsDict[i], list);
        }
    }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// Time: O(m*n)
WordDistance.prototype.shortest = function(word1, word2) {
    let l1 = this.map.get(word1);
    let l2 = this.map.get(word2);
    let res = Infinity;
    for (let num1 of l1) {
        for (let num2 of l2) {
            res = Math.min(res,Math.abs(num1-num2));
        }
    }
    return res;
};

// Time: O(m+n)
WordDistance.prototype.shortest = function(word1, word2) {
    let l1 = this.map.get(word1);
    let l2 = this.map.get(word2);
    let res = Infinity;
    let i = 0, j = 0;
    while (i < l1.length && j < l2.length) {
        // L1 L2都是从大到小排列的。这个隐藏的东西很重要。
        res = Math.min(res,Math.abs(l1.get(i) - l2.get(j)));
        if (l1.get(i) < l2.get(j)) {
            i++;
        } else {
            j++
        }
    }
    return res;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
```

## S.245. Shortest Word Distance III
```javascript
/**
 * 245. Shortest Word Distance III
 * This is a follow up of Shortest Word Distance. The only difference is now word1 could be the same as word2.

 Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

 word1 and word2 may be the same and they represent two individual words in the list.

 For example,
 Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

 Given word1 = “makes”, word2 = “coding”, return 1.
 Given word1 = "makes", word2 = "makes", return 3.

 time : O(n)
 space : O(1)

 PS：这里忽略了equals的时间复杂度，要不equals也是 O(n)
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(wordsDict, word1, word2) {
    let res = wordsDict.length;
    let a = -1;
    let b = -1;
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] == word1) {
            a = i;
        }

        if (wordsDict[i] == word2) {
            if (word1 == word2) {
                a = b;
            }
            b = i;
        }
        if (a != -1 && b != -1) {
            res = Math.min(res, Math.abs(a-b));
        }
    }
    return res;
};

let wordsDict = ["practice", "makes", "perfect", "coding", "makes", "coding", "makes"];
let word1 = "makes", word2 = "makes";

console.log(shortestWordDistance(wordsDict, word1, word2))
```

## S.246. Strobogrammatic Number
```javascript
/**
 * 246. Strobogrammatic Number
 * A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

 Write a function to determine if a number is strobogrammatic. The number is represented as a string.

 For example, the numbers "69", "88", and "818" are all strobogrammatic.

 time : O(n)
 space : O(n)
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    let map = new Map();
    map.set(6,9);
    map.set(9,6);
    map.set(0,0);
    map.set(1,1);
    map.set(8,8);

    let left = 0;
    let right = num.length - 1;
    while (left <= right) {
        // 特别要注意这里。 转化 string => number
        if (!map.has(Number(num[left]))) {
            return false;
        }
        if (map.get(Number(num[left])) != Number(num[right])) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
console.log(isStrobogrammatic('69')); // true
```

## S.247. Strobogrammatic Number II
```javascript
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
```

## S.249. Group Shifted Strings
```javascript
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
```