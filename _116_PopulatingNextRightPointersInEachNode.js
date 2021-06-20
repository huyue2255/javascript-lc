/**
 * * 116. Populating Next Right Pointers in Each Node
 * For example,
 Given the following perfect binary tree,
 1
 /  \
 2    3
 / \  / \
 4  5  6  7
 After calling your function, the tree should look like:
 1 -> NULL
 /  \
 2 -> 3 -> NULL
 / \  / \
 4->5->6->7 -> NULL

 time : O(n);
 space : O(n);
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

//Method 1: pre-order 的方法来做，两种情况。同一个父母，左边指向右边。
//    还有一种是不同的父母，父母1右边指向父母2的左边。然后不停的便利，先左边再右边。
var connect = function (root) {
    if (root == null) return;
    if (root.left != null) {
        root.left.next = root.right;
    }

    if (root.next != null && root.right != null) {
        root.right.next = root.next.left;
    }

    connect(root.left);
    connect(root.right)
};

//Method 2: 这是一种层次遍历的办法，每一层从左向右移动。

var connect2 = function (root) {
    let start = root;
    while (start != null) {
        let cur = start;
        while (cur != null) {
            if (cur.left != null) {
                cur.left.next = cur.right;
            }
            if (cur.next != null && cur.right != null) {
                cur.right.next = cur.next.left;
            }
            cur = cur.next;
        }
        start = start.left;
    }
}