/**
 * 250. Count Univalue Subtrees
 * Given a binary tree, count the number of uni-value subtrees.

 A Uni-value subtree means all nodes of the subtree have the same value.

 For example:
 Given binary tree,
      5
     / \
    1   5
   / \   \
  5   5   5
 return 4.

 root = 5 res = 2
 root = 1
 root = 5 res = 3
 root = 5 res = 4

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
var countUnivalSubtrees = function(root) {
    let res = 0;
    helper(root);
    return res;
    function helper(root) {
        if (root == null) return true;
        let left = helper(root.left);
        let right = helper(root.right);
        if (left && right) {
            if (root.left != null && root.left.val != root.val) {
                return false;
            }

            if (root.right != null && root.right.val != root.val) {
                return false;
            }

            res++;
            return true;
        }
    }
};