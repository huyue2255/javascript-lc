/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
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

