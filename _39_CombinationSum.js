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