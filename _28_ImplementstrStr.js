/**
 * time : O(m * n)
 * space : O(1)
 * @param haystack
 * @param needle
 * @return
 */

var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (i + needle.length > haystack.length) break;
        for (let j = 0 ; j < needle.length; j++) {
            if (haystack[i + j] != needle[j]) break;
            if (j == needle.length - 1) {
                return i;
            }
        }
    }
    return -1;
};

console.log(strStr('helo','ll'));