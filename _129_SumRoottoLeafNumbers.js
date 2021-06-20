/**
* 129. Sum Root to Leaf Numbers
* For example,

   1
  / \
 2   3
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.

time : O(n)
space : O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//Method 1
function helper(root, num) {
    if (root == null) return 0;
    if (root.left  == null && root.right == null) {
        return num*10 + root.val;
    }
    let res = helper(root.left, num*10 + root.val) + helper(root.right, num*10 + root.val)
    return res;
}

var sumNumbers = function(root) {
    if (root == null) return 0; // 这一步不能少，input[0,1] ， 不加的话就会出错null.left
    return helper(root,0);
};


