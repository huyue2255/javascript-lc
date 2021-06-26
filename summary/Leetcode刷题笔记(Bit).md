## S.191. Number of 1 Bits

```javascript
/**
* 191. Number of 1 Bits
* Write a function that takes an unsigned integer and returns the number of ’1' bits it has
* (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011,
so the function should return 3.

使用n&(n-1)的方法：n&(n-1)作用：将n的二进制表示中的最低位为1的改为0
n              n-1            n&(n-1)
step1:   110101          110100          110100
step2:   110100          110011          110000
step3:   110000          101111          100000
step4:   100000          011111          000000

time : O(1) / O(logn)
space : O(1)
* @param {number} n - a positive integer
* @return {number}
    */
// Method 1
var hammingWeight = function(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        res = res + (n & 1);
        n = n >> 1;
    }
    return res;
};

// Method 2
var hammingWeight1 = function(n) {
    let res = 0;
    while (n != 0) {
        n = n & (n-1);
        res++;
    }
    return res;
};
```

## S.190. Reverse Bits
```javascript
/**
 * 190. Reverse Bits
 * Reverse bits of a given 32 bits unsigned integer.

 For example, given input 43261596 (represented in binary as 00000010100101000001111010011100),
 return 964176192 (represented in binary as 00111001011110000010100101000000).

 time : O(1) / O(logn)
 space : O(1)
 思路： bit题目
 这道题又是在考察位操作 Bit Operation，LeetCode 中有关位操作的题也有不少，
 比如 Repeated DNA Sequences，Single Number,   Single Number II ，和 Grey Code 等等。跟上面那些题比起来，
 这道题简直不能再简单了，我们只需要把要翻转的数从右向左一位位的取出来，如果取出来的是1，将结果 res 左移一位并且加上1；
 如果取出来的是0，将结果 res 左移一位，然后将n右移一位即可，
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    if (n == 0) return 0;
    let res = 0;
    for (let i = 0; i < 32; i++) {
        if (n & 1 == 1) {
            res = (res << 1) + 1;
        } else {
            res = res << 1;
        }
        n = n >> 1;
    }
    return res;
};

var reverseBits = function(n) {
    return Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2);
};
```