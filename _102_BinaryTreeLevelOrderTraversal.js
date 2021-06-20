/**
 *
 * Q102:Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if(!root) return [];
    let res = [];
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        let list = [];
        for (let i = 0; i < size; i++) {
            let cur = queue.shift(); // pick up first element from array
            if (cur.left != null) queue.push(cur.left);
            if (cur.right != null) queue.push(cur.right);
            list.push(cur.val);
        }
        res.push(list);
    }
    return res;
};




let root = new TreeNode(3);
let node1 = new TreeNode(9);
let node2 = new TreeNode(20);
root.left = node1;
root.right = node2;

console.log(levelOrder(root));