## S.155_Min StackTest

```javascript
/**
 * 155. Min StackTest
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

 push(x) -- Push element x onto stack.
 pop() -- Removes the element on top of the stack.
 top() -- Get the top element.
 getMin() -- Retrieve the minimum element in the stack.

 Example:
 _155_MinStack minStack = new _155_MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);
 minStack.getMin();   --> Returns -3.
 minStack.pop();
 minStack.top();      --> Returns 0.
 minStack.getMin();   --> Returns -2.
 
 time : O(1)
 space : O(n)
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = [];
    this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.stack.length) {
        this.minStack.push(val);
    } else {
        if (val < this.minStack[this.minStack.length-1]) {
            this.minStack.push(val);
        } else {
            this.minStack.push(this.minStack[this.minStack.length-1]);
        }
    }
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let top = this.stack[this.stack.length - 1];
    return top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.minStack[this.minStack.length -1];
    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

## S.157. Read N Characters Given Read4
```javascript
/**
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let temp = new Array(4);
        let index = 0;
        while (true) {
            let count = read4(temp);
            count = Math.min(count, n - index);
            for (let i = 0; i < count; i++) {
                buf[index++] = temp[i];
            }
            if (index == n || count < 4) return index;
        }
    };
};
```
## S.173. Binary Search Tree Iterator
Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST)


Input
["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]

Output
[null, 3, 7, true, 9, true, 15, true, 20, false]

Explanation
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next();    // return 3

bSTIterator.next();    // return 7

bSTIterator.hasNext(); // return True

bSTIterator.next();    // return 9

bSTIterator.hasNext(); // return True

bSTIterator.next();    // return 15

bSTIterator.hasNext(); // return True

bSTIterator.next();    // return 20

bSTIterator.hasNext(); // return False


```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 
 * 这是很重要的一道题目！！！
 * @param {TreeNode} root
 */

// ===========================================Design/Tree/Queue============================================
// 考点： Design/Tree/Queue => 这种办法比较容易想,但是需要加一个helper function先把所有　node都加进去，
// 但是还有一种常见的是人家会用stack来做。这中办法不需要helper function
function getInorderOrder(root, inorder) {
    if (!root) {
        return;
    }
    getInorderOrder(root.left, inorder);
    inorder.push(root.val);
    getInorderOrder(root.right, inorder);
}

var BSTIterator = function(root) {
    let inorder = [];
    getInorderOrder(root, inorder);
    this.inorder = inorder;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.inorder.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.inorder.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// ===========================================Design/Tree/Stack============================================
var BSTIterator = function(root) {
    this.root = root;
    this.stack = [];
};

/**
 * @return {number}
 */
// time: O(n)
BSTIterator.prototype.next = function() {
    while(this.root) {
        this.stack.push(this.root);
        this.root = this.root.left;
    }
    const res = this.stack.pop();
    this.root = res.right;
    return res.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.root || this.stack.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

```
## S.208.Implement Tire
```javascript
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
```

## S.211. Add and Search Word - Data structure design
```javascript
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
```

## S.251. Flatten 2D Vector
```javascript
/**
 * 251. Flatten 2D Vector
 * Given 2d vector =

 [
 [1,2],
 [3],
 [4,5,6]
 ]
 By calling next repeatedly until hasNext returns false,
 the order of elements returned by next should be: [1,2,3,4,5,6].

 time : O(n)
 space : O(1)
 * @param {number[][]} vec
 */
var Vector2D = function(vec) {
    // 两种方法flattern 2d matrix array
    // this.arr = vec.flat(2); // method 1
    // method 2
    this.arr = [];
    const helper = (val) => {
        if (!Array.isArray(val)) {
            this.arr.push(val)
        }

        for (let i = 0; i < val.length; i++) {
            helper(val[i])
        }
        return
    }
    helper(vec);
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
    return this.arr.shift();
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
    return this.arr.length > 0;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
```