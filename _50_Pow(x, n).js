/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 *
 * base case =>
 * recursive rule =>
 */
var myPow = function (x, n) {
    if (n > 0) {
        return pow(x, n);
    } else {
        return 1 / pow(x, Math.abs(n));
    }
};

function pow(x, n){
    if(n == 0) return 1;
    let y = pow(x, Math.floor(n/2));

    if(n % 2 == 0){
        return y * y;
    }else {
        return y * y * x;
    }
}



console.log(myPow(2, -2));