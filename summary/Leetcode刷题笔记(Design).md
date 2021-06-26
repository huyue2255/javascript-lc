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