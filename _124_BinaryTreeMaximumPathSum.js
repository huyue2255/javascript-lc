/**
 * 124. Binary Tree Maximum Path Sum
 * Given a binary tree, find the maximum path sum.

 For this problem, a path is defined as any sequence of nodes from some starting node to any node
 in the tree along the parent-child connections. The path must contain at least one node and does not
 need to go through the root.

 For example:
 Given the below binary tree,

   1
  / \
 2   3
 Return 6.

     3
    / \
   9  20
  /  \
 15   7


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

// 这里需要注意的一点是helper function我是写在里面的。
// 这样res因为不是pass by reference. 所以就可以用closure来让这个值在helper 里面也可以用得起来。

// 以往写的时候就是res是一个[[]] 这样是 reference variable.
// 所以就算是helper function 写在外面也可以把 res一直传下去，并且实时修改里面的值。
var maxPathSum = function(root) {
    if (root == null) return 0;
    let res = -Infinity;
    // console.log(res[0])
    helper(root);
    return res;

    function helper(root) {
        if (root == null) return 0;
        let left = Math.max(0, helper(root.left));
        let right = Math.max(0, helper(root.right));
        res = Math.max(res, left + right + root.val);
        return Math.max(left, right) + root.val;
    }
};



// function test2(res) {
//     res.push(90);
// }
// var test = function() {
//     let res = [8];
//     test2(res);
//     return res;
// };
//
// console.log(test())  // 这样res里面的值才会发生改变。

console.log(maxPathSum())
