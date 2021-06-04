var romanToInt = function(s) {
    if (s == null || s.length == 0) return 0;
    var res = romanList(s.charAt(0));
    for (let i = 1; i < s.length; i++) {
        if (romanList(s.charAt(i)) > romanList(s.charAt(i-1))) {
            res = res + romanList(s.charAt(i)) - 2 * romanList(s.charAt(i-1));
        } else {
            res += romanList(s.charAt(i));
        }
    }
    return res;
};

var romanList = function(c) {
    switch(c) {
        case 'I' : return 1;
        case 'V' : return 5;
        case 'X' : return 10;
        case 'L' : return 50;
        case 'C' : return 100;
        case 'D' : return 500;
        case 'M' : return 1000;
        default: return 0;
    }
}