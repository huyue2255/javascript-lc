/**
 *
 * time : O(logn) space : O(1)
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let low = 1, high = num;
    while(low <= high) {
        let mid = low + Math.floor((high - low)/2);
        if (mid * mid == num) {
            return true;
        } else if(mid * mid < num) {
            low = mid + 1;
        } else {
            high = mid -1;
        }
    }
    return false;
};
