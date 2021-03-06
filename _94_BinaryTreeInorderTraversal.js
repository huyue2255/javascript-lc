/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 94. Binary Tree Inorder Traversal
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * time : O(n)
 * space : O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
function helper(res, root) {
    if (root == null) return;
    helper(res,root.left);
    res.push(root.val);
    helper(res,root.right);
}

var inorderTraversal = function(root) {
    let res = [];
    // 此处加 root.length == 0 是因为leetcode里面有一个case: 传进去的值是空array[], 要求返回一个空array.
    if (root == null || root.length == 0) return res;
    helper(res, root);
    return res;
};