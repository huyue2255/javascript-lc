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