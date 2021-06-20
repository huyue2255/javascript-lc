/**
 *  * 112. Path Sum
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

 For example:
 Given the below binary tree and sum = 22,
           5
          / \
         4   8
        /   / \
      11  13  4
     /  \      \
    7    2      1
 return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 有两种方法，stack的方法就是很巧妙的构建了一个新的树。
 还有一种就是，递归的写法。时间空间复杂度都是一样的。
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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root == null) return false;
    if (root.left == null && root.right == null) {
        return sum == root.val;
    }
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

var hasPathSum2 = function(root, targetSum) {
    if (root == null) return false;
    let stack = [root];
    while (stack.length != 0) {
        let cur = stack.pop();
        if (cur.left == null && cur.right == null) {
            if (cur.val == summ) {
                return true;
            }
        }

        if (cur.left != null) {
            stack.push(cur.left);
            cur.left.val += cur.val;
        }

        if (cur.right != null) {
            stack.push(cur.right);
            cur.right.val += cur.val;
        }
    }
    return false;
};