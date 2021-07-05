/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *  * 226. Invert Binary Tree
 * Invert a binary tree.

      4
    /   \
   2     7
  / \   / \
 1   3 6   9

 to
       4
     /   \
    7     2
   / \   / \
  9   6 3   1

 time : O(n)
 space : O(n);
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Method 1 top-down
var invertTree = function(root) {
    if (root == null) return root;
    let queue = [root];
    while( queue.length != 0) {
        let cur = queue.shift();
        let temp = cur.left;
        cur.left = cur.right;
        cur.right = temp;
        if (cur.left != null) queue.push(cur.left);
        if (cur.right != null) queue.push(cur.right);
    }
    return root;
};

// Method 2 思路： bottom-up
var invertTree = function(root) {
    if (root == null) return root;
    let left = invertTree(root.left);
    let  right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};
