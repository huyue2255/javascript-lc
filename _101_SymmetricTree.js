/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * time: O(n)
 * space: O(n)
 * @param {TreeNode} root
 * @return {boolean}
 */
// 这里要注意的就是，如果是one.val == two.val 就要继续向下进行比较。不能直接返回true.
function check(one,two) {
    if (one == null && two == null) return true;

    if(one == null || two == null)  return false;

    if(one.val != two.val) return false;

    return check(one.left, two.right) && check(one.right, two.left);
}
var isSymmetric = function(root) {
    if (root == null) return true;
    return check(root.left, root.right);
};


