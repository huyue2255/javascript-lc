// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

var intToRoman = function(num) {
    var arr = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var str = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var res = "";
    for (let i = 0; i < arr.length; i++) {
        while(num >= arr[i]) {
            num = num - arr[i];
            res = res.concat(str[i]);
            console.log(res);
        }
    }
    return res;
};

console.log(intToRoman(499));