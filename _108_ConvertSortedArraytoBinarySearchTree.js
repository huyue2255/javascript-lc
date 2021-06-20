/**
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

 A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 *
 /*
 * 108. Convert Sorted Array to Binary Search Tree

 [1,2,3,4,5]

 time : O(n);
 space : O(n);
 * time: O(n)
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


