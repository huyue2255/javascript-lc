// Solution 1: Binary Search
var findClosestElements1 = function(arr, k, x) {
    let l = 0, r = arr.length - 1;
    while (l + 1 < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (arr[mid] >= x) {
            r = mid;
        } else {
            l = mid;
        }
    }
    let closer = Math.abs(x - arr[l + 1]) < Math.abs(x - arr[l]) ? l + 1 : l;
    return expand(closer, arr, k, x);
}

function expand(start, arr, k, x) {
    let left = [], right = [];
    let l = start - 1, r = start;
    while (k > 0) {
        let lDist = arr[l] || arr[l] === 0 ? Math.abs(x - arr[l]) : Infinity;
        let rDist = arr[r] || arr[r] === 0 ? Math.abs(x - arr[r]) : Infinity;
        if (lDist <= rDist) {
            left.push(arr[l]);
            l--;
        } else {
            right.push(arr[r]);
            r++;
        }
        k--;
    }
    return left.reverse().concat(right);
}

// Solution 2: Using Sorting - O(nlogn)
// Approach: Sort the given array according to the distance from x and sort again the first k elements and return.

var findClosestElements2 = function(arr, k, x) {

    // sort the array based on closeness from x
    arr.sort((a, b) => Math.abs(a - x) - Math.abs(b - x));
    arr.splice(k);

    arr.sort((a, b) => a - b);
    return arr;
}
nums = [1,2,3,4,5];
console.log(findClosestElements1(nums, 4, 5));
