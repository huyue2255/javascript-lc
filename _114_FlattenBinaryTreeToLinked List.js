/**
 * 114. Flatten Binary Tree to Linked List
 * For example,
 Given
        1
       / \
      2   5
     / \   \
    3   4   6
 The flattened tree should look like:
         1
         \
         2
         \
         3
         \
         4
         \
         5
         \
         6

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
function helper(root, res) {
    if (root == null) return;
    res.push(root);
    helper(root.left, res);
    helper(root.right, res);
}


var flatten = function(root) {
    let res = [];
    if (root == null) return res;
    helper(root, res);
    for (let i = 0; i < res.length - 1; i++) {
        res[i].left = null;
        res[i].right = res[i+1];
    }
    res[res.length - 1].left = null;
    res[res.length - 1].right = null;
};


// 以下是其他两种新方法
// time : O(n)
// space : O(n)

// Method 2
var flatten2 = function(root) {
    if (root == null || root.length == 0) return [];
    let stack = [root];
    while(stack.length != 0) {
        let cur = stack.pop();
        if (cur.right != null) stack.push(cur.right);
        if (cur.left != null) stack.push(cur.left);
        if (stack.length != 0) {
            cur.right = stack[stack.length - 1];
        }
        cur.left = null;
    }
};




