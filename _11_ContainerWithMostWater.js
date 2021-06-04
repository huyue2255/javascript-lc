var maxArea = function(height) {
    var res = 0;
    var left = 0;
    var right = height.length - 1;
    while (left < right) {
        res = Math.max(res, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return res;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));


