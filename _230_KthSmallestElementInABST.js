/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 230. Kth Smallest Element in a BST
 * Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
 *
 *
 * time : O(n)
 * space : O(n);
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function helper(root, inorder) {
    if (root == null) return;
    helper(root.left, inorder);
    inorder.push(root.val);
    helper(root.right, inorder);
}

var kthSmallest = function(root, k) {
    let inorder = []
    helper(root, inorder);
    return inorder[k-1];
};

let root = new TreeNode(3);
let node1 = new TreeNode(1);
let node2 = new TreeNode(4);
let node3 = new TreeNode(2);

root.left = node1;
root.right = node2;
node1.left = null;
node1.right = node3;
node2.left = null;
node2.right = null
console.log(kthSmallest(root, 1)); // 1
