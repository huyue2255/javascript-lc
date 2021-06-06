/**
 * 十的五次方 =》 ten to the fifth
 * Base case: F(0) = 0; F(1) = 1;
 * Recursive: F(n) = F(n-1) + F(n-2)
 * @param {number} n
 * @return {number}
 *
 * Time(O) = 1 + 2 + 4 + 8 + 2^(n-1) = 2^n => leaf node
 * Space(n) = O(n) => how many call stacks are there in the recursion tree. = level of recursion tree.
 *
 *  For binary tree, the number of all leaf nodes in the binary tree is larger than the rest nodes in the binary tree.
 *  Thus, we only care about the nodes in the leaf level.
 */
var fib = function(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n-1) + fib(n-2);
};

console.log(fib(3));