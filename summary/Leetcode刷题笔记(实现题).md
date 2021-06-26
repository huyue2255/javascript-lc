## S.163. Missing Ranges

```javascript
/**
 * 163. Missing Ranges
 * Given a sorted integer array where the range of elements are in the inclusive range [lower, upper],
 * return its missing ranges.

 For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"].

 [2147483647] 0 2147483647
 ["0->2147483646"]
 ["0->2147483646","-2147483648->2147483647"]

 time : O(n)
 space : O(n)
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
        const res = [];
        nums = [lower - 1, ...nums, upper + 1];
        for (let i = 1; i < nums.length; i++) {
            let diff = nums[i] - nums[i-1];
            if (diff == 2) {
                res.push(`${nums[i] - 1}`);
            } else if (diff > 2) {
                res.push(`${nums[i-1] + 1}->${nums[i]-1}`);
            }
        }
        return res;
    };

let nums = [0, 1, 3, 50, 75];
console.log(findMissingRanges(nums, 0, 99));
```

## S.165. Compare Version Numbers
```javascript
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
```

##S.166. Fraction to Recurring Decimal
```javascript
/**
 * 166. Fraction to Recurring Decimal
 * Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

 If the fractional part is repeating, enclose the repeating part in parentheses.

 For example,

 Given numerator = 1, denominator = 2, return "0.5".
 Given numerator = 2, denominator = 1, return "2".
 Given numerator = 2, denominator = 3, return "0.(6)".

 0.2(34)

 1, 0 + - 越界
 2, 整数
 3, 小数 -> 循环
 思路：就是一道简单的实现题目。1。确定符号。 2。只要出现相同的数字就是开始循环的地方。
 time : O(logn)
 space : O(n)
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator == 0) return "0";
    let res = [];
    let map = new Map();
    let sign = (numerator > 0) ^ (denominator > 0) ?  "-" : "";
    let num = Math.abs(numerator);
    let den = Math.abs(denominator);
    res.push(sign);

    res.push(Math.floor( num / den));
    num %= den;
    if (num == 0) {
        return res.join('');
    }

    res.push(".");
    map.set(num,res.length);
    while (num != 0) {
        num *= 10;
        res.push(Math.floor(num / den));
        num %= den;
        if (map.has(num)) {
            let index = map.get(num);
            res.splice(index, 0, "(");
            res.push(")");
            break;
        } else {
            map.set(num, res.length);
        }
    }
    return res.join('');
};
```
## S.168. Excel Sheet Column Title
```javascript
/**
 * 168. Excel Sheet Column Title
 * 1 -> A
 2 -> B
 3 -> C
 ...
 26 -> Z
 27 -> AA
 28 -> AB

 time : O(logn)
 space : O(n)
 值得注意的地方，要把n--.因为是从A开始的
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let arr = [];
    while (columnNumber > 0) {
        columnNumber--;
        arr.push(String.fromCharCode(('A'.charCodeAt(0) + columnNumber % 26)));
        columnNumber = Math.floor(columnNumber / 26);
    }
    return arr.reverse().join('');
};
'ABC'.charCodeAt(0)  // returns 65
let res = '28';
console.log(convertToTitle(res))
```

##S.171. Excel Sheet Column Number
```javascript
/**
 * 171. Excel Sheet Column Number
 * For example:

 A -> 1
 B -> 2
 C -> 3
 ...
 Z -> 26
 AA -> 27
 AB -> 28

 AB -> 28
 res = 1 * 26 + 2 = 28

 time : O(n)
 space : O(1)
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        res = res * 26 + (columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1);
    }
    return res;
};

let columnTitle = "AA";
console.log(titleToNumber(columnTitle))
console.log('B' - 'A')
```

##S.169. Majority Element
```javascript
/**
 * 169. Majority Element
 * Given an array of size n, find the majority element. The majority element is the element
 * that appears more than ⌊ n/2 ⌋ times.

 You may assume that the array is non-empty and the majority element always exist in the array
 * @param {number[]} nums
 * @return {number}
 */
// time : O(nlogn) space : O(1)
var majorityElement1 = function(nums) {
    let arr = nums.sort();
    return arr[Math.floor(nums.length / 2)];
};


// Hashmap: O(n) space : O(n)
var majorityElement2 = function(nums) {
    let map = new Map();
    let res = 0;
    for (let num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }

        if (map.get(num) > nums.length / 2) {
            res = num;
            break;
        }
    }
    return res;
};
```

##S.170. Two Sum III - Data structure design
```javascript
/**
 * 170. Two Sum III - Data structure design
 * Design and implement a _1_TwoSum class. It should support the following operations: add and find.

 add - Add the number to an internal data structure.
 find - Find if there exists any pair of numbers which sum is equal to the value.

 For example,
 add(1); add(3); add(5);
 find(4) -> true
 find(7) -> false
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.nums = new Map();
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if (!this.nums.has(number)) {
        this.nums.set(number,1);
    } else {
        this.nums.set(number, this.nums.get(number) + 1);
    }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (const[num, count] of this.nums) {
        let diff = value - num;
        if ((diff == num && count > 1) || (diff != num && this.nums.has(diff))) {
            return true;
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
```

## S.179. Largest Number
```javascript
/**
 * 179. Largest Number
 * Given a list of non negative integers, arrange them such that they form the largest number.

 For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

 Note: The result may be very large, so you need to return a string instead of an integer.

 time : O(nlogn)
 space : O(n)
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if (nums == null || nums.length == 0) {
        return '0'
    }

    nums.sort((a,b) => `${b}${a}` - `${a}${b}`);

    if (nums[0] == 0) {
        return '0';
    }

    return nums.join('');
};

let arr = [3, 30, 34, 5, 9];
console.log(largestNumber(arr)); // 9534330```


```

## S.187. Repeated DNA Sequences
```javascript
/**
 * 187. Repeated DNA Sequences
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T,
 * for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

 Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

 For example,

 Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

 Return:
 ["AAAAACCCCC", "CCCCCAAAAA"].

 time : O(n)
 space : O(n)
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let seen = new Set();
    let repeat = new Set();
    for (let i = 0; i < s.length - 9; i++) {
        let temp = s.substring(i, i+10);
        if (seen.has(temp)) {
            repeat.add(temp);
        }
        seen.add(temp);
    }
    return [...repeat];
};

let str = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
console
```