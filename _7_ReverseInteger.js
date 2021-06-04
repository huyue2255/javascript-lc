var reverse = function(x) {
    const isNegative = x < 0 ? true : false;
    if (isNegative){
        x = x * -1;
    }
    var res = 0;
    while(x != 0) {
        res = x % 10 + res * 10;
        x = parseInt(x / 10);
        if(res > 2**31){
            return 0;
        }
    }
    return isNegative? res * -1 : res;
};

// console.log(reverse(233));

//

var reverse2 = function(x) {
    var res = Math.abs(x).toString().split('').reverse().join('');
    if (res > 2**31) return 0;
    return res * Math.sign(x);
};

console.log(reverse(-233));