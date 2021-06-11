/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * time : O(n);
 * space : O(n);
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function helper(res, root) {
    if (root == null) return ;
    helper(res,root.left);
    helper(res, root.right);
    res.push(root.val);
}

var postorderTraversal = function(root) {
    let res = [];
    if (root == null || root.length == 0) return res;
    helper(res,root);
    return res;
};

let n1 =  new TreeNode(1);
let n2 =  new TreeNode(2);
let n3 =  new TreeNode(3);
n1.left = n2;
n1.right = n3;

n2.left = null;
n2.right = null;

n3.left = null;
n3.right = null;

console.log(postorderTraversal(n1));