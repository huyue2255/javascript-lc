
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