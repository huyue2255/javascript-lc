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