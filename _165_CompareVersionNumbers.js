/**
 * 165. Compare Version Numbers
 * Compare two version numbers version1 and version2.
 If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

 You may assume that the version strings are non-empty and contain only digits and the . character.
 The . character does not represent a decimal point and is used to separate number sequences.
 For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

 Here is an example of version numbers ordering:

 0.1 < 1.1 < 1.2 < 13.37

 time : O(max(m,n))
 space : O(n)
 这里就是有一个小技巧，先把字符分割，然后换成arr,不同长度就补全0，这样就算是0开头也无所谓了。
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let arr1 = version1.split('.');
    let arr2 = version2.split('.');
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        let nums1 = i < arr1.length ? parseInt(arr1[i]) : 0;
        let nums2 = i < arr2.length ? parseInt(arr2[i]) : 0;
        if (nums1 > nums2) {
            return 1
        } else if (nums1 < nums2) {
            return -1;
        }
    }
    return 0;
};


let r = "1";
let r2 = "1.1";

console.log(compareVersion(r,r2))

