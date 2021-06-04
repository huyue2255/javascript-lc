/**
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.

 Example:
 Input: "babad"
 Output: "bab"

 Note: "aba" is also a valid answer.

 Example:
 Input: "cbbd"
 Output: "bb"
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function(s) {
    var res = "";
    if (s == null || s.length <= 1) return s;
    for (let i = 0; i < s.length; i++) {
        helper(s, i, i);
        helper(s, i, i + 1);
    }

    // helper function
    function helper(s, left, right) {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            let subStr = s.substring(left, right+1);
            if (res.length < subStr.length) {
                res = subStr;
            }
            left--;
            right++;
        }
    }
    return res;
};


console.log(longestPalindrome("cbbd"));
