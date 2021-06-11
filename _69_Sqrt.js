/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 0) return 0;
    let low = 1, high = x;
    while(low <= high) {
        let mid = low + Math.floor((high - low)/2);
        if (mid * mid == x) {
            return mid;
        } else if(mid * mid < x) {
            low = mid + 1;
        } else {
            high = mid -1;
        }
    }
    if (high * high < x) {
        return high;
    } else {
        return low;
    }
};