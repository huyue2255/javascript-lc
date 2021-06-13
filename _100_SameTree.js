/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function check(one,two) {
    if (one == null && two == null) return true;
    if(one == null || two == null)  return false;

    if(one.val != two.val) {
        return false;
    }
    return check(one.left, two.left) && check(one.right, two.right);
}
var isSameTree = function(p, q) {
    if (p == null && q == null) return true;
    return check(p, q);
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let n1 =  new TreeNode(4);
let n2 =  new TreeNode(2);
let n3 =  new TreeNode(9);
n1.left = n2;
n1.right = n3;

n2.left = null;
n2.right = null;

n3.left = null;
n3.right = null;

//
let n11 =  new TreeNode(4);
let n21 =  new TreeNode(2);
let n31 =  new TreeNode(9);
n11.left = n21;
n11.right = n31;

n21.left = null;
n21.right = null;

n31.left = null;
n31.right = null;
console.log(isSameTree(n1, n11))