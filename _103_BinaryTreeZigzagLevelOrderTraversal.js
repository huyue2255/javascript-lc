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
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.right = (right === undefined ? null : right)
}

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
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    let x = true;
    while (queue.length != 0) {
        let list = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            if (x) {               // 这一块是需要注意的，非常重要，始终保持左右的顺序，但是插入的顺序可以改成插头或者插尾
                list.push(cur.val);
            } else {
                list.unshift(cur.val);
            }
            if (cur.left != null) queue.push(cur.left);
            if (cur.right != null) queue.push(cur.right);
        }
        x = x ? false : true;
        res.push(list);
    }
    return res;
};

let root = new TreeNode(3);
let node1 = new TreeNode(9);
let node2 = new TreeNode(20);

let node3 = new TreeNode(15);
let node4 = new TreeNode(7);
root.left = node1;
root.right = node2;
node2.left = node3;
node2.right = node4;

console.log(zigzagLevelOrder(root))