var myAtoi = function(s) {
    var i = 0;
    var sign = 1;
    var res = 0;
    var INT_MAX = 2**31 - 1;
    var INT_MIN = -1 * 2**31;

    while (s[i] == ' ') i++;
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '+' ? 1 : -1;
        i++;
    }
    while (s[i] >= '0' && s[i] <= '9') {
        res = res * 10 + (s[i] - 0);
        if (sign === 1 && res > INT_MAX) return INT_MAX;
        if (sign === -1 && res > INT_MAX + 1) return INT_MIN;
        i++;
    }
    return res*sign;
};

console.log(myAtoi('90ddddd'));