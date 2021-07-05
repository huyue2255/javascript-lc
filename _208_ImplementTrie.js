/**
 * Initialize your data structure here.
 * time : O(n)  n: word.length();
 * space: O(num of Words * word.length();
 */
var Trie = function() {
    this.isWord = false;
    this.root = new Map();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this;
    for (let c of word) {
        if (!cur.root.has(c)) {
            cur.root.set(c, new Trie());
        }
        cur = cur.root.get(c);
    }
    cur.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this;
    for (let c of word) {
        if (!cur.root.has(c)) {
            return false;
        }
        cur = cur.root.get(c);
    }
    return cur.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this;
    for (let c of prefix) {
        if (!cur.root.has(c)) return false;
        cur = cur.root.get(c);
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */