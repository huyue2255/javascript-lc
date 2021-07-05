/**
 *
 * 211. Add and Search Word - Data structure design
 * Design a data structure that supports the following two operations:

 void addWord(word)
 bool search(word)
 search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

 For example:

 addWord("bad")
 addWord("dad")
 addWord("mad")
 search("pad") -> false
 search("bad") -> true
 search(".ad") -> true
 search("b..") -> true
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.map = new Map();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let size = word.length;
    if(this.map.get(size))  {
        this.map.get(size).push(word);
    } else {
        this.map.set(size, [word]);
    }
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if(!this.map.get(word.length)) return false;
    let temp = [...this.map.get(word.length)];
    console.log('temp',temp)
    for(let i = 0; i < word.length; i++) {
        if (word[i] === ".") continue;
        for (let j = 0; j < temp.length; j++) {
            if (word[i] !== temp[j][i]) {
                // 删除从j开始的一个元素，其他元素会向前移动，所以　j--, 从而让之后的j++会指向下一个元素。
                // 最后判断数组里面还有没有元素。
                temp.splice(j, 1);
                j--;
            }
        }
    }
    return temp.length != 0 ? true : false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

var obj = new WordDictionary()
obj.addWord('oord');
obj.addWord('kord');
var param_2 = obj.search('word');
console.log(param_2);