## S.144_Binary Tree Preorder Traversal
```javascript
// Method1: 这种办法需要传一个数组用来存每一层的内容才可以。
function helper(res, root) {
    if (root == null) return;
    res.push(root.val);
    helper(res,root.left);
    helper(res,root.right);
}

var preorderTraversal = function (root) {
    if (root == null || root.length == 0) return [];
    let res = [];
    helper(res,root);
    return res;
};


// Method2: 这个只是在当前层打印出来就好了。
var printPreorderTraversal = function(root) {
    if (root == null) return;
    console.log('root.val', root.val);
    printPreorderTraversal(root.left);
    printPreorderTraversal(root.right);
}
```

## S.145_Binary Tree Postorder Traversal
```javascript
/**
 * time : O(n);
 * space : O(n);
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function helper(res, root) {
    if (root == null) return ;
    helper(res,root.left);
    helper(res, root.right);
    res.push(root.val);
}

var postorderTraversal = function(root) {
    let res = [];
    if (root == null || root.length == 0) return res;
    helper(res,root);
    return res;
};
```

## S.94_Binary Tree Inorder Traversal
```javascript
/**
 * 94. Binary Tree Inorder Traversal
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * time : O(n)
 * space : O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
function helper(res, root) {
    if (root == null) return;
    helper(res,root.left);
    res.push(root.val);
    helper(res,root.right);
}

var inorderTraversal = function(root) {
    let res = [];
    // 此处加 root.length == 0 是因为leetcode里面有一个case: 传进去的值是空array[], 要求返回一个空array.
    if (root == null || root.length == 0) return res;
    helper(res, root);
    return res;
};
```

## S.111_Minimum Depth of Binary Tree
```javascript
/**
 * time : O(n);
 * space : O(n);
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root == null) return 0;
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    if (root.left == null || root.right == null) {
        return Math.max(left,right) + 1;
    }
    return 1 + Math.min(left, right);
};
```

## S.104_MaximumDepthofBinaryTree
```javascript
/**
 * 104. Maximum Depth of Binary Tree
 * Given a binary tree, find its maximum depth.

 The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 * time : O(n);
 * space : O(n);
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) return 0;
    return 1 + Math.max(maxDepth(root.left),maxDepth(root.right));
};
```



## S.102_Binary Tree Level Order Traversal
```javascript
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
```

## S.103_Binary Tree Zigzag Level Order Traversal

```javascript
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
```
## S.107_Binary Tree Level Order Traversal II

```javascript
/* 107. Binary Tree Level Order Traversal II  (102 follow up)
For example:
    Given binary tree [3,9,20,null,null,15,7],
3
/ \
        9  20
/  \
     15   7
    [
    [15,7],
        [9,20],
        [3]
    ]

time : O(n)
space : O(n)
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
```


## S.98_Validate Binary Search Tree
```javascript
/**
 * 98. Validate Binary Search Tree
 * Given a binary tree, determine if it is a valid binary search tree (BST).

 Assume a BST is defined as follows:

 The left subtree of a node contains only nodes with keys less than the node's key.
 The right subtree of a node contains only nodes with keys greater than the node's key.
 Both the left and right subtrees must also be binary search trees.

 time : O(n)
 space : O(n)
 *        10 [-inf, +inf]
 *      /       \
 *     5         15
 *   /  \    /         \
 *  2    7  12(10, 15)   20 (15, +inf)
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBSTHelper(root, min, max) {
    if (root == null) return true;
    if (root.val >= max || root.val <= min) {
        return false;
    } else {
        return isBSTHelper(root.left, min, root.val) && isBSTHelper(root.right, root.val, max);
    }
}


var isValidBST = function(root) {
    if (root == null) return true;
    return isBSTHelper(root, -Infinity, Infinity)
};
```
## S.100_Same Tree
```javascript
/**
 * 100. Same Tree

 Given two binary trees, write a function to check if they are equal or not.

 Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

 time : O(n);
 space : O(n);
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function check(one,two) {
    if (one == null && two == null) return true;
    if(one == null || two == null)  return false;

    if(one.val != two.val) {
        return false;
    }
    return check(one.left, two.left) && check(one.right, two.right);
}
var isSameTree = function(p, q) {
    if (p == null && q == null) return true;
    return check(p, q);
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
```
## S.101_Symmetric Tree
```javascript
/**
 * 101. Symmetric Tree
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

 For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 1
 / \
 2   2
 / \ / \
 3  4 4  3
 * time: O(n)
 * space: O(n)
 * @param {TreeNode} root
 * @return {boolean}
 */
// 这里要注意的就是，如果是one.val == two.val 就要继续向下进行比较。不能直接返回true.
function check(one,two) {
    if (one == null && two == null) return true;

    if(one == null || two == null)  return false;

    if(one.val != two.val) return false;

    return check(one.left, two.right) && check(one.right, two.left);
}
var isSymmetric = function(root) {
    if (root == null) return true;
    return check(root.left, root.right);
};
```

## S.110_Balanced Binary Tree
```javascript
/**
     * 110. Balanced Binary Tree
     * Given a binary tree, determine if it is height-balanced.

     For this problem, a height-balanced binary tree is defined as a binary tree
     in which the depth of the two subtrees of every node never differ by more than 1.
         1  -- 3
        / \
       2   3  -- 1
      / \
     4   5  -- 1

         1
        / \
       2   3  2 --> 3  3 --> 1
      / \
     4   5  -- 2
          \
          9  -- 1

     time : O(n);
     space : O(n);
     * @param root
     * @return
     */

    public boolean isBalanced(TreeNode root) {
        if (root == null) return true;
        return helper(root) != -1;
    }

    public int helper(TreeNode root) {
        if (root == null) return 0;
        int l = helper(root.left);
        int r = helper(root.right);
        if (l == -1 || r == -1 || Math.abs(l - r) > 1) {
            return -1;
        }
        return Math.max(l, r) + 1;
    }
```

## S.108_Convert Sorted Array to Binary Search Tree
```javascript
/* 
* 108. Convert Sorted Array to Binary Search Tree

 [1,2,3,4,5]time: O(n)
 * space: O(n)
 * @param {number[]} nums
 * @return {TreeNode}
 */

function helper(nums, left, right) {
    if (left  > right) return null;
    let mid = left + Math.floor((right - left) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = helper(nums, left, mid-1);
    node.right = helper(nums, mid+1, right);
    return node;
}

var sortedArrayToBST = function(nums) {
    if (nums == null || nums.length == 0) return null;
    return helper(nums, 0, nums.length - 1);
};
```

## S.109_Convert Sorted List to Binary Search Tree
```javascript
/*
* 109. Convert Sorted List to Binary Search Tree

     time : O(nlogn);
     space : O(n);
 */
function toBST(head, tail) {
    if (head == tail) return null;
    let slow = head;
    let fast = head;

    while (fast != tail && fast.next != tail) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let root = new TreeNode(slow.val);
    root.left = toBST(head, slow);
    root.right = toBST(slow.next, tail);
    return root
}


var sortedListToBST = function(head) {
    if (head == null) return null;
    return toBST(head, null);
};
```



## S.133_Clone Graph
```javascript
/**
 * 133. Clone Graph
 * 无向图，深度优先，广度有优先。
 * time : O(m + n) m : nodes n : edges
 * space : O(m)
 * @param {Node} node
 * @return {Node}
 */

// BFS
var cloneGraph = function(node){
    if(!node) return null;
    let map = new Map();
    let queue = [];
    map.set(node, new Node(node.val));
    queue.push(node);
    while (queue.length != 0) {
        let n = queue.shift();
        for (let nei of n.neighbors) {
            if (!map.has(nei)) {
                queue.push(nei);
                map.set(nei, new Node(nei.val));
            }
            map.get(n).neighbors.push(map.get(nei));
        }
    }
    return map.get(node);
};

// DFS 这个暂时还没有看懂
var cloneGraph = function(node, map = new Map()) {
    if(!node) return null
    if(map.has(node)) return map.get(node)
    const n = new Node(node.val)
    map.set(node, n)
    for(let k of node.neighbors){
        n.neighbors.push(cloneGraph(k, map))
    }
    return n;
};
```