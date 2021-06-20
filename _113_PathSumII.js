/**
 * 113. Path Sum II
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

 For example:
 Given the below binary tree and sum = 22,
       5
      / \
     4   8
    /   / \
   11  13  4
  /  \    / \
 7    2  5   1
 [
 [5,4,11,2],
 [5,8,4,5]
 ]
 time : O(n);
 space : O(n);
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
function helper(res, list, root,targetSum) {
    if (root == null) return;
    list.push(root.val);
    if (root.left == null && root.right == null) {
        if (targetSum == root.val){
            res.push(list.slice());
        }
    }

    helper(res,list, root.left,targetSum - root.val);
    helper(res,list, root.right,targetSum - root.val);
    list.pop();
}

var pathSum = function(root, targetSum) {
    let res = []
    if (root == null) return res;
    helper(res, [], root, targetSum);
    return res;
};