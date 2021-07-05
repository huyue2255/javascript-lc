/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 222. Count Complete Tree Nodes
 * Given a complete binary tree, count the number of nodes.

 Definition of a complete binary tree from Wikipedia:
 In a complete binary tree every level, except possibly the last, is completely filled, and all nodes
 in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

       3
     /   \
    9     20
  /  \   /  \
 15   7 1

 2^h - 1

 * @param {TreeNode} root
 * @return {number}
 */
// Method 1: time: O(n), space: O(1)
var countNodes = function(root) {
    if (root == null) return 0;
    let count = 0;
    let queue = [root];
    while (queue.length != 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            count++;
            if (cur.left != null) queue.push(cur.left);
            if (cur.right != null) queue.push(cur.right);
        }
    }
    return count;
};

// Method 2
// time : O(logn * logn)
// space : O(n) / O(logn) 不确定
function leftDepth(root) {
    let height = 0;
    while (root != null) {
        root = root.left;
        height++;
    }
    return height;
}

function rightDepth(root) {
    let height = 0;
    while (root != null) {
        root = root.right;
        height++;
    }
    return height;
}

var countNodes = function(root) {
    let left = leftDepth(root);
    let right = rightDepth(root);

    if (left == right) {
        return (1 << left) - 1
    } else {
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
};