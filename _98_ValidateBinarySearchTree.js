/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 98. Validate Binary Search Tree
 * Given a binary tree, determine if it is a valid binary search tree (BST).

 Assume a BST is defined as follows:

 The left subtree of a node contains only nodes with keys less than the node's key.
 The right subtree of a node contains only nodes with keys greater than the node's key.
 Both the left and right subtrees must also be binary search trees.

 time : O(n)
 space : O(n)
 *        10 [-inf, +inf]
 *      /       \
 *     5         15
 *   /  \    /         \
 *  2    7  12(10, 15)   20 (15, +inf)
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBSTHelper(root, min, max) {
    if (root == null) return true;
    if (root.val >= max || root.val <= min) {
        return false;
    } else {
        return isBSTHelper(root.left, min, root.val) && isBSTHelper(root.right, root.val, max);
    }
}


var isValidBST = function(root) {
    if (root == null) return true;
    return isBSTHelper(root, -Infinity, Infinity)
};