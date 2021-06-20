/**
 * 139. Word Break
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 * determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 * You may assume the dictionary does not contain duplicate words.

 For example, given
 s = "leetcode",
 dict = ["leet", "code"].

 Return true because "leetcode" can be segmented as "leet code".

 time : O(n^2) ～ O(n^4);
 space : O(n);

 contains 时间：O(n)
 substring 时间：O(n)

 s = "leetcode",
 dict = ["leet", "code"]
 又是一道dp的题目。 解释视频： https://www.youtube.com/watch?v=H2EgWq-45CY

 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j,i))){
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};