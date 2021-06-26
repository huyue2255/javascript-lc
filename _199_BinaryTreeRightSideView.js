/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *
 * given a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.

 For example:
 Given the following binary tree,
    1            <---
  /   \
 2     3         <---
  \     \
  5     4       <---
 You should return [1, 3, 4].

 root 1 res : 0 level : 1

 res : 1, 3, 4

 time : O(n);
 space : O(n);
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Method 1 - DFS
function helper(res, root, level) {
    if (root == null) return;
    if (res.length == level) {
        res.push(root.val);
    }
    helper(res, root.right, level + 1);
    helper(res, root.left, level + 1);
}

var rightSideView = function (root) {
    let res = [];
    helper(res, root, 0);
    return res;
};


// Method 2 - BFS
var rightSideView = function (root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            if (i == 0) res.push(cur.val);
            if (cur.right != null) queue.push(cur.right);
            if (cur.left != null) queue.push(cur.left);

        }
    }
    return res;
};

let root = new TreeNode(3);
let node1 = new TreeNode(9);
let node2 = new TreeNode(20);
root.left = node1;
root.right = node2;

console.log(rightSideView(root));