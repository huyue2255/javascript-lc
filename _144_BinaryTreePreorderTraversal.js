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

// Method1: 这种办法需要传一个数组用来存每一层的内容才可以。
function helper(res, root) {
    if (root == null) return;
    res.push(root.val);
    helper(res,root.left);
    helper(res,root.right);
}

var preorderTraversal = function (root) {
    console.log('root.length',root.length)
    if (root == null || root.length == 0) return [];
    let res = [];
    helper(res,root);
    return res;
};


// Method2: 这个只是在当前层打印出来就好了。
var printPreorderTraversal = function(root) {
    if (root == null) return;
    console.log('root.val', root.val);
    printPreorderTraversal(root.left);
    printPreorderTraversal(root.right);
}

let n1 =  new TreeNode(1);
let n2 =  new TreeNode(2);
let n3 =  new TreeNode(3);
n1.left = n2;
n1.right = n3;

n2.left = null;
n2.right = null;

n3.left = null;
n3.right = null;

// console.log(printPreorderTraversal(n1));
console.log(preorderTraversal([]));



