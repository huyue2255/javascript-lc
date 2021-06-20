/**
 * 128. Longest Consecutive Sequence
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

 For example,
 Given [100, 4, 200, 1, 3, 2],
 The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

 Your algorithm should run in O(n) complexity.

 time : O(n)
 space : O(n)
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums == null || nums.length == 0) return 0;
    let set = new Set(nums);

    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let down = nums[i] - 1;
        while (set.has(down)) {
            set.delete(down);
            down--;
        }
        let up = nums[i] + 1;
        while (set.has(up)) {
            set.delete(up);
            up++;
        }
        res = Math.max(res, up - down - 1);
    }
    return res;
};

let nums = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive(nums));
