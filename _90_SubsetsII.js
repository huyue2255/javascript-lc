/**
 * @param {number[]} nums
 * @return {number[][]}
 */

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
    if(nums == null || nums.length == 0) return res;
    helper(res,[],nums, 0);
    return res;
};

// Method 2
// var subsetsWithDup = function(nums) {
//     nums.sort();
//     let s = [[]];
//     for (i of nums){
//         let l = s.length;
//         for (let j=0; j<l; j++){
//             s.push([...s[j], i]);
//         }
//     }
//     return [...new Set(s.map(JSON.stringify))].map(JSON.parse);
// };