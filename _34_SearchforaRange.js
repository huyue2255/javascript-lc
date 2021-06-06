var searchRange = function(nums, target) {
    const findFirst = function(nums, target, n) {
        let start = 0;
        let end = n - 1;
        while (start + 1 < end) {
            let mid = Math.floor((start + end) / 2);
          // console.log(mid);
          if (nums[mid] == target) {
              end = mid;
          } else if (nums[mid] < target){
              start = mid;
          } else {
              end = mid;
          }
        }
        if (nums[start] == target) return start;
        if (nums[end] == target) return end;
        return -1;
    }

    const findLast = function(nums, target, n) {
        let start = 0;
        let end = n - 1;
        while (start + 1 < end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] == target) {
                start = mid;
            } else if (nums[mid] < target){
                start = mid
            } else {
                end = mid;
            }
        }
        if (nums[end] == target) return end;
        if (nums[start] == target) return start;
        return -1;
    }

    let n = nums.length;
    let left = findFirst(nums, target, n);
    let right = findLast(nums, target, n);
    return [left, right];
};

console.log(searchRange([5,7,7,8,8,10], 6));