/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * time:O(nlogn)
 * space:O(n)
 * @param {TreeNode} root
 * @return {boolean}
 */

// recursion call recursion function inside (这种并不是一个好的方法)
function getDepth(root) {
    if (root == null) return 0;
    return 1 + Math.max(getDepth(root.left),getDepth(root.right));
};

var isBalanced = function(root) {
    if (root == null) return true;
    let left = getDepth(root.left);
    let right = getDepth(root.right);
    if (Math.abs(left - right) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};