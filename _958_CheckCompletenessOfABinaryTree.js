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
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// Method 1
var isCompleteTree = function (root) {
    if (root == null) return false;
    let queue = [root];
    // 加上这一行就不对了,要非常注意。
    // let size = queue.length;
    let flag = false;
    while (queue.length) {
        let cur = queue.shift();
        // case 1: 左边为空，右边不为空。肯定不对
        if (cur.left == null && cur.right != null) return false;
        // case 2: 左边不是空，右边是空。先判断flag, 然后判断要是还有新的node就不对。在push.
        if (cur.left != null && cur.right == null) {
            if (flag == true) {
                return false;
            }
            queue.push(cur.left);
            flag = true;
        }
        // case 3: 同时都为空，就把flag给改了。
        if (cur.left == null && cur.right == null) {
            flag = true;
        }
        // case 4: 同时都不是空，先判断flag,在push.
        if (cur.left != null && cur.right != null) {
            if (flag == true) {
                return false;
            }
            queue.push(cur.left);
            queue.push(cur.right);
        }
    }
    return true;
};

// Method 2:  T.C: O(N)， S.C: O(N)
// 这种情况比较特殊。就是一直push.直到出现null。stop。如果还有node && node != null。就不对。
var isCompleteTree2 = function(root) {
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let cur = queue.shift();
        if (cur == null) {
            break;
        }
        queue.push(cur.left);
        queue.push(cur.right);
    }

    while (queue.length) {
        let cur = queue.shift();
        if (cur != null) {
            return false;
        }
    }
    return true;
};

let root = new TreeNode(1);
let node1 = new TreeNode(2);
let node2 = new TreeNode(3);
let node3 = new TreeNode(4);
let node4 = new TreeNode(5);
let node5 = new TreeNode(6);
root.left = node1;
root.right = node2;
// node1.left = node3;
// node1.right = node4;
node1.left = null;
node1.right = null;
node2.left = node5;
node2.right = null
console.log(isCompleteTree2(root));


