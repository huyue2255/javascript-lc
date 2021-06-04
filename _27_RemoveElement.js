var removeElement = function(nums, val) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[res++] = nums[i];
        }
    }
    return res;
};

console.log(removeElement([1,2,3,4,5], 5));