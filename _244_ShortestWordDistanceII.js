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