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
 // cloning an array
 // (ES6) - [...tempList]
 // (ES5) - JSON.parse(JSON.stringify(tempList)) ;
 * @param {number[]} nums
 * @return {number[][]}
 */

// Method 1: 这种方法很巧妙！
function subsetsI(nums) {
    const result = [[]];
    for (const num of nums) {
        result.push(...result.map(x => [...x, num]));
    }
    return result;
};

// Method 2： 常规做方法
function subsets(nums) {
    let list = [];
    helper(list, [], nums, 0);
    return list;
}

function helper(list , tempList, nums, start){
    list.push([...tempList]);
    for(let i = start; i < nums.length; i++){
        tempList.push(nums[i]);                   // choose
        helper(list, tempList, nums, i + 1);   // explore
        tempList.pop();                           // unchoose
    }
}

console.log(subsetsI([1,2,3]))
