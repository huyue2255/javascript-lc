var fourSum = function(nums, target) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j-1]) continue;
            let low = j + 1;
            let high = nums.length - 1;
            let sum = target - nums[i] -nums[j];
            while(low < high) {
                if (low < high && sum === nums[low] + nums[high]) {
                    let cur = [nums[i], nums[j], nums[low], nums[high]];
                    while(low < high && nums[low] == nums[low+1]) low++;
                    while(low < high && nums[high] == nums[high-1]) high--;
                    res.push(cur);
                    low++;
                    high--;
                } else if (low < high && sum > nums[low] + nums[high]){
                    low++;
                }else {
                    high--;
                }
            }
        }
    }
    return  res;
};

console.log(fourSum([-2,-1,-1,1,1,2,2], 0));