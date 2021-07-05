/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 257. Binary Tree Paths
 * Given a binary tree, return all root-to-leaf paths.

 For example, given the following binary tree:
        3
       / \
      9  20
    /  \
   15   7
 ["3->9->15", "3->9->7", "3->20]

 case :
        3
       / \
      9  20
    /  \
   15   7
 3->9->15
 3->9->7
 3->20
 ["3->9->15", "3->9->7", "3->20]

 time : O(n);
 space : O(n);
 * @param {TreeNode} root
 * @return {string[]}
 */

function helper(res,root, path) {
    if (root.left == null && root.right == null) {
        res.push(path + root.val);
    }
    if (root.left != null) {
        helper(res, root.left, path + root.val + "->");
    }
    if (root.right != null) {
        helper(res, root.right, path + root.val + "->");
    }
}

var binaryTreePaths = function(root) {
    let res = [];
    if (root == null) return res;
    helper(res,root, "");
    return res;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let n1 =  new TreeNode(1);
let n2 =  new TreeNode(2);
let n3 =  new TreeNode(3);
let n4 =  new TreeNode(5);
n1.left = n2;
n1.right = n3;
n2.right = n4;


console.log(binaryTreePaths(n1)); // [ '1->2->5', '1->3' ]
