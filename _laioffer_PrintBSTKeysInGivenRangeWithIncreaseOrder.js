// Given two values k1 and k2(k1<k2) and a root pointer to binary search tree.
// Find all the keys of tree in range k1 and k2.
// Print all the keys in an increasing order.


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var printRangeBST = function (root, k1, k2) {
    if (root == null) return null;
    // 这里不需要等号，等于的话，左边就一定比k1小了。
    if (root.val > k1) {
        printRangeBST(root.left, k1,k2);
    }
    if (root.val >= k1 && root.val <= k2) {
        console.log(root.val);
    }
    if (root.val < k2) {
        printRangeBST(root.right, k1,k2);
    }
};

let n1 =  new TreeNode(4);
let n2 =  new TreeNode(2);
let n3 =  new TreeNode(9);
n1.left = n2;
n1.right = n3;

n2.left = null;
n2.right = null;

n3.left = null;
n3.right = null;

printRangeBST(n1, 2,18);