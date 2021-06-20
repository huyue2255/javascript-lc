/**
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
var levelOrderBottom = function(root) {
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
        res.unshift(list);
    }
    return res;
};
