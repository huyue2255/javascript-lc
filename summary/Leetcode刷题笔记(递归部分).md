# Leetcode刷题笔记（递归部分）

## S.509_Fibonacci Number
     he Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    return fib(n-1) + fib(n-2);
};
```



## S.39_Combination Sum

    /**
     * Given a set of candidate numbers (C) (without duplicates) and a target number (T),
     * find all unique combinations in C where the candidate numbers sums to T.

     The same repeated number may be chosen from C unlimited number of times.

     Note:
     All numbers (including target) will be positive integers.
     The solution set must not contain duplicate combinations.
     For example, given candidate set [2, 3, 6, 7] and target 7,
     A solution set is:
     [
     [7],
     [2, 2, 3]
     ]

     time : O(2^n)
     space : O(n) 或者说是 O(n^2)，根据结果而不同
     * @param candidates
     * @param target
     * @return
     */
```javascript
var combinationSum = function(candidates, target) {
    let res = [];

    if (candidates == null || candidates.length == 0) return res;
    helper(res, [], candidates, target, 0);
    return res;
};

function helper(res, list, candidates, target, start) {
    if (target < 0) return;
    if (target == 0) {
        res.push(list.slice());
        return;
    }
    for (let i = start; i < candidates.length; i++) {
        list.push(candidates[i]);
        helper(res, list, candidates, target - candidates[i], i);
        list.pop();
    }
}
nums = [2,3,6,7];
console.log(combinationSum(nums, 7));
```
## S.216. Combination Sum III
```javascript
/**
 * 216. Combination Sum III
 * Find all possible combinations of k numbers that add up to a number n,
 * given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.


 Example 1:

 Input: k = 3, n = 7

 Output:

 [[1,2,4]]

 Example 2:

 Input: k = 3, n = 9

 Output:

 [[1,2,6], [1,3,5], [2,3,4]]

 time : O(2^n)
 space : O(n);
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function helper(res, list, k, n, start) {

    if (k == 0 && n == 0) {
        res.push(list.slice());
        return;
    }
    // 这里是值得注意的是所有数字小于9
    // for (let i = start; i <= n; i++) { 否则的话就是这行代码
    for (let i = start; i <= 9; i++) {
        list.push(i);
        helper(res, list,k-1,n-i,i+1);
        list.pop();
    }
}

var combinationSum3 = function(k, n) {
    let res = [];
    helper(res, [], k, n, 1);
    return res;
};

console.log(combinationSum3(3,7)); // [ [ 1, 2, 4 ] ]

```

## S.77_Combinations


```javascript
/**
 * * 77. Combinations
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

 For example,
 If n = 4 and k = 2, a solution is:

 [
 [2,4],
 [3,4],
 [2,3],
 [1,2],
 [1,3],
 [1,4],
 ]
 [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

 time : O(n^min{k,n-k})
 space : O(n);
 http://stackoverflow.com/questions/31120402/complexity-when-generating-all-combinations
 back-tracking
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

function helper(res, list, n, k, start) {
    if (k == 0) {
        res.push(list.slice());
        return;
    }

    for (let i = start; i <= n; i++) {
        list.push(i);
        helper(res, list, n, k-1, i+1);
        list.pop();
    }

}

var combine = function(n, k) {
    let res = [];
    helper(res, [],n,k,1);
    return res;
};

console.log(combine(4,2))
```

## S.78_Subsets

```javascript
/**
 * * 78. Subsets
 * Given a set of distinct integers, nums, return all possible subsets.

 Note: The solution set must not contain duplicate subsets.

 For example,
 If nums = [1,2,3], a solution is:
 [
 [3],
 [1],
 [2],
 [1,2,3],
 [1,3],
 [2,3],
 [1,2],
 []
 ]

 test : [1,2,3]

 []
 [1]
 [1, 2]
 [1, 2, 3]
 [1, 3]
 [2]
 [2, 3]
 [3]

 1 — 2 - 3
 |   |
 2   3
 |
 3


 time : O(2^n);
 space : O(n);
 * @param {number[]} nums
 * @return {number[][]}
 */

function helper(res, list, nums, index) {
    res.push(list.slice());
    for(let i = index; i < nums.length; i++) {
        list.push(nums[i]);
        helper(res, list, nums, i+1);
        list.pop();
    }
}


var subsets = function(nums) {
    let res= [];
    if(nums == null || nums.length == 0) return res;
    helper(res,[],nums, 0);
    return res;
};

console.log(subsets([1,2,3]))

```

## S.90. Subsets II
Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

```javascript
/**
 * /**
 * 90. Subsets II
 * Given a collection of integers that might contain duplicates, nums, return all possible subsets.

 Note: The solution set must not contain duplicate subsets.


 For example,
 If nums = [1,2,2], a solution is:

 [
 [2],
 [1],
 [1,2,2],
 [2,2],
 [1,2],
 []
 ]

 test: [1,2,2]


 time : O(2^n);
 space : O(n);
 * @param {number[]} nums
 * @return {number[][]}
 */

// Method 1
function helper(res, list, nums, index) {
    res.push(list.slice());
    for(let i = index; i < nums.length; i++) {
        if (i != index && nums[i] == nums[i-1]) continue;
        list.push(nums[i]);
        helper(res, list, nums, i+1);
        list.pop();
    }
}


var subsetsWithDup = function(nums) {
    let res= [];
    nums.sort();
    if(nums == null || nums.length == 0) return res;
    helper(res,[],nums, 0);
    return res;
};


// Method 2
var subsetsWithDup = function(nums) {
    nums.sort();
    let s = [[]];
    for (i of nums){
        let l = s.length;
        for (let j=0; j<l; j++){
            s.push([...s[j], i]);
        }
    }
    return [...new Set(s.map(JSON.stringify))].map(JSON.parse);
};
```

## S.156_Binary Tree Upside Down
```javascript
/**
 * 156. Binary Tree Upside Down
 * Given a binary tree where all the right nodes are either leaf nodes with a
 * sibling (a left node that shares the same parent node) or empty,
 * flip it upside down and turn it into a tree where the original right nodes
 * turned into left leaf nodes. Return the new root.

 For example:
 Given a binary tree {1,2,3,4,5},
     1
    / \
   2   3
  / \
 4   5
 return the root of the binary tree [4,5,2,#,#,3,1].
    4
   / \
  5   2
 / \
3   1

    1             1
   / \          /
  2   3       2 - 3
 / \        /
4   5     4 - 5

 time : O(n);
 space : O(n);
 思路： 又是
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
    if(root == null || (root.left == null && root.right == null)) {
        return root;
    }

    let newRoot = upsideDownBinaryTree(root.left);
    root.left.left = root.right;
    root.left.right = root;

    root.left = null;
    root.right = null
    // 很有意思把最左边的孩子一路传上来！！
    return newRoot;
};
```

## S.254. Factor _77_Combinations
```javascript
/**
 * 254. Factor _77_Combinations
 * Numbers can be regarded as product of its factors. For example,

 8 = 2 x 2 x 2;
 = 2 x 4.
 Write a function that takes an integer n and return all possible combinations of its factors.

 Note:
 You may assume that n is always positive.
 Factors should be greater than 1 and less than n.
 Examples:
 input: 1
 output:
 []
 input: 37
 output:
 []
 input: 12
 output:
 [
 [2, 6],
 [2, 2, 3],
 [3, 4]
 ]
 input: 32
 output:
 [
 [2, 16],
 [2, 2, 8],
 [2, 2, 2, 4],
 [2, 2, 2, 2, 2],
 [2, 4, 4],
 [4, 8]
 ]
 * @param {number} n
 * @return {number[][]}
 */
function helper(res, list, n, start) {
    if (n == 1) {
        if (list.length > 1) {
            res.push(list.slice());
            return;
        }
    }

    for (let i = start; i <= n; i++) {
        if (n % i == 0) {
            list.push(i);
            helper(res, list, n / i, i);
            list.pop();
        }
    }
}

var getFactors = function(n) {
    let res = [];
    helper(res, [], n, 2);
    return res;
};

console.log(getFactors(4))
```