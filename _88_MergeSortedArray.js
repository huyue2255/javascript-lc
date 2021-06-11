/**
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 Output: [1,2,2,3,5,6]
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
var merge = function(nums1, m, nums2, n) {
    let i = m-1;
    let j = n-1;
    let k = m+n-1;
    while (i >= 0 && j >= 0) {
        nums1[k--] = nums1[i] >= nums2[i] ? nums1[i--] : nums2[j--]
    }
    while(j >= 0) {
        nums1[k--] = nums2[j--];
    }
};
var merge1 = function(nums1, m, nums2, n) {
    if (m != 0){
        nums1.splice(m);
        console.log(nums1)
    }else {
        nums1 = [];
    }
    if (n != 0){
        nums2.splice(n);
        console.log(nums2)
    }else {
        nums2 = [];
    }
    let res = nums1.concat(nums2);
    return res;
};

let nums1 = [2,2,3,0,0,0];
let nums2 = [2,2,2];
let res = merge1(nums1, 3, nums2, 2)
console.log(res.sort());
