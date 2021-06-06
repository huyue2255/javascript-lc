var jump = function(nums) {
    let start = 0, end = 0, step = 0;
    if (nums.length == 1) return 0;
    while (start <= end) {
        let end_new = end;
        for (let i = start; i <= end; i++) {
            end_new = Math.max(end_new, nums[i]+i);
            if (end_new >= nums.length - 1) {
                return step+1;
            }
        }
        step++;
        start = end + 1;
        end = end_new;
    }
};

console.log(removeDuplicates([2,3,1,1,4]));