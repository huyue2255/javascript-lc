/**
 * 131. Palindrome Partitioning
 * Given a string s, partition s such that every substring of the partition is a palindrome.

 Return all possible palindrome partitioning of s.

 For example, given s = "aab",
 Return

 [
 ["aa","b"],
 ["a","a","b"]
 ]
 // 这道题目是backtracking的做法。很重要的一点是去要删除本行已经加入的元素。
 time: O(2^n) space O(n)
 * @param {string} s
 * @return {string[][]}
 */

function isValid(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function helper(res, s, list, startIndex) {
    if (startIndex == s.length) {
        res.push(list.slice());
        return res;
    }
// 这里的startIndex是一直在改变的。
    for (let i = startIndex + 1; i <= s.length; i++) {
        if (isValid(s.substring(startIndex, i))){
            list.push(s.substring(startIndex, i));
            helper(res, s,list,i);
            list.pop();
        }
    }
}

var partition = function(s) {
    let res = [];
    if (s == null || s.length == 0) return res;
    helper(res, s,[], 0);
    return res;
};

let s = "aaaab";
console.log(partition(s))