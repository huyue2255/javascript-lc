/**
 * Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring,
 "pwke" is a subsequence and not a substring.


 time : O(n)
 space : O(n)
 * @param s
 * @return
 */

var lengthOfLongestSubstring = function(s) {
    if (s == null || s.length == 0) return 0;
    let set = new Set();
    let res = 0;
    for (let i = 0, j = 0; i < s.length; i++) {
        if (set.has(s.charAt(i))) {
            set.delete(s.charAt(j++));
            i--;
        } else {
            set.add(s.charAt(i));
            res = Math.max(res, set.size);
        }
    }
    return res;
};

console.log(lengthOfLongestSubstring('abcabcd'));