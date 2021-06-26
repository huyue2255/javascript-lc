/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 156. Binary Tree Upside Down
 * Given a binary tree where all the right nodes are either leaf nodes with a
 * sibling (a left node that shares the same parent node) or empty,
 * flip it upside down and turn it into a tree where the original right nodes
 * turned into left leaf nodes. Return the new root.

 For example:
 Given a binary tree {1,2,3,4,5},
     1
    / \
   2   3
  / \
 4   5
 return the root of the binary tree [4,5,2,#,#,3,1].
    4
   / \
  5   2
 / \
3   1

    1             1
   / \          /
  2   3       2 - 3
 / \        /
4   5     4 - 5

 time : O(n);
 space : O(n);
 思路： 又是
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
    if(root == null || (root.left == null && root.right == null)) {
        return root;
    }

    let newRoot = upsideDownBinaryTree(root.left);
    root.left.left = root.right;
    root.left.right = root;

    root.left = null;
    root.right = null
    // 很有意思把最左边的孩子一路传上来！！
    return newRoot;
};