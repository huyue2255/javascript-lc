# Leetcode刷题笔记（数组部分）

## S.1_Two Sum

**思路1**：

使用hash表，假设a+b=target。

1. 遍历元素，假设每次遍历到的元素是a，如果map中不包含这个target-a，则把target-a作为key进行存储，当前下标作为value进行存储。
2. 由于存储的是差值，当下次再遍历到该这个key的时候，就证明我们已经找到了这两个元素。
3. 存储两次的下标就行。

**代码**：时间复杂度O(n)

```java
var twoSum = function(nums, target) {
    let arr = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            arr[0] = map.get(target - nums[i]);
            arr[1] = i;
            break;
        }
        map.set(nums[i], i);
    }
    return arr; 
};	

console.log(twoSum([1, 2, 3, 7, 8], [9])); // [ 1, 3 ]
```


## S.15_3Sum

原题地址：

[http://www.lintcode.com/problem/3sum/](http://www.lintcode.com/problem/3sum/)

思路：

1. 把数组排序。
2. 最外层使用一个循环，遍历数组元素，范围（0~num.length-1）。
3. 内层使用一个循环和两个指针，分别从头部和尾部开始移动，在外层循环固定到一个数的情况下，头部向后移动，尾部向前移动，直至满足a+b+c=0。

代码：
```javascript
/**
 *
 For example, given array S = [-1, 0, 1, 2, -1, -4],
 A solution set is:
 [
 [-1, 0, 1],
 [-1, -1, 2]
 ]

 [-4, -1, -1, 0, 1, 2]

 time : O(n^2);
 space : O(n^2);
 * @param nums
 * @return
 */

var threeSum = function(nums) {
    let results = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        let low = i + 1;
        let high = nums.length - 1;
        let sum = 0 - nums[i];

        while (low < high) {
            if (nums[low] + nums[high] === sum) {
                let res = [nums[i], nums[low], nums[high]];
                results.push(res);
                while(low < high && nums[low] == nums[low+1]) low++;
                while(low < high && nums[high] == nums[high-1]) high--;
                low++;
                high--;
            } else if (nums[low] + nums[high] < sum){
                low++;
            } else {
                high--;
            }
        }
    }
    return results;
};

console.log(threeSum([-2,-1,-1,1,1,2,2])); // [ [ -2, 1, 1 ], [ -1, -1, 2 ] ]

```


## S.16_3Sum Closest

原题地址：

https://leetcode.com/problems/3sum-closest/

思路：

	1.	先排序。
	2.	外层使用for循环，遍历每一个元素。内层左右夹逼，每当发现a+b+c更接近target的时候，就更改result的值。
	3.	如果sum > target，如果sum < target ，begin++。

代码：

```java
public static int threeSumClosest(int[] nums, int target) {
		Arrays.sort(nums);   //先排序
		int sum = 0;
		int result = 0;
		int diff = 0;
		int min_diff = 10000;
		for(int i = 0; i < nums.length-1; i++){  //外层循环
			int begin = i+1;
			int end = nums.length-1;
			while(begin < end){
				sum = nums[i] + nums[begin] + nums[end];
				diff = Math.abs(sum - target);
				if(diff < min_diff){
					min_diff = diff;
					result = sum;
				}
				
				if(sum < target)   //之前排序的原因在这里，sum<target，begin 就往后移动
					begin++;
				else				//否则 如果 sum > target，end 就往前移动
					end--;
			}
		}
			
		return result;
    }
```

##S.18_4Sum

原题地址：

https://leetcode.com/problems/4sum/

思路：

1. 对数组排序。
2. 外面使用两层循环，枚举数组中的a 和b。内层使用being和end两个指针代表c和d，分别从两端往中间遍历。
3. 当a+b+c+d=target时，保存一次答案，如果a+b+c+d>target，end--；如果a+b+c+d<target，begin++。

代码：

```javascript
var fourSum = function(nums, target) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j-1]) continue;
            let low = j + 1;
            let high = nums.length - 1;
            let sum = target - nums[i] -nums[j];
            while(low < high) {
                if (low < high && sum === nums[low] + nums[high]) {
                    let cur = [nums[i], nums[j], nums[low], nums[high]];
                    while(low < high && nums[low] == nums[low+1]) low++;
                    while(low < high && nums[high] == nums[high-1]) high--;
                    res.push(cur);
                    low++;
                    high--;
                } else if (low < high && sum > nums[low] + nums[high]){
                    low++;
                }else {
                    high--;
                }
            }
        }
    }
    return  res;
};

console.log(fourSum([-2,-1,-1,1,1,2,2], 0)); // [ [ -2, -1, 1, 2 ], [ -1, -1, 1, 1 ] ]

```


## S.27_Remove Element

原题地址：

https://leetcode.com/problems/remove-element/

思路：

找出数组中不等于val的值有多少个，该值作为数组的新length，并且保证前length个元素不包含val。

i 遍历所有元素，index记录val的位置，并且把和val值不同的元素覆盖到val的位置。

代码：

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[res++] = nums[i];
            }
        }
        return res;
    };

console.log(removeElement([1,2,3,4,5], 5)); // 4
```

## S.11_Container With Most Water
![Screenshot](./images/S11.png)

https://leetcode.com/problems/container-with-most-water/

**思路1**： 两个指针一个从前走，一个从后走。水的容量区别于低的那一边。

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var res = 0;
    var left = 0;
    var right = height.length - 1;
    while (left < right) {
        res = Math.max(res, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return res;
};
```
## S.17_Letter Combinations of a Phone Number
![Screenshot](./images/S17.png)

```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length == 0) return [];

    let M = new Map();
    M.set('2', ['a', 'b', 'c']);
    M.set('3', ['d', 'e', 'f']);
    M.set('4', ['g', 'h', 'i']);
    M.set('5', ['j', 'k', 'l']);
    M.set('6', ['m', 'n', 'o']);
    M.set('7', ['p', 'q', 'r', 's']);
    M.set('8', ['t', 'u', 'v']);
    M.set('9', ['w', 'x', 'y', 'z']);

    let prod = (a, b) => {
        let arr = [];
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                arr.push([...a[i], ...b[i]]);
            }
        }
        return arr;
    }

    let res = M.get(digits[0]);
    for (let i = 1; i < digits.length; i++) {
        res = prod(res, M.get(digits[i]));
    }
    return res.map(i => [...i].join(''));
};



console.log(letterCombinations('23'));
```

## S.278_First Bad Version
n: 表示有几个版本， 找出其中一个版本是坏的。

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

```javascript
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
var solution = function(isBadVersion) {
    return function(n) {
        let start = 1;
        let end = n;

        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if (isBadVersion(mid)) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return start;
    };
};
```


## S.367_Valid Perfect Square

Input: num = 16
Output: true

```javascript
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

```

## S.69_Sqrt(x)

Input: x = 4
Output: 2

```javascript
/**
 * 69. Sqrt(x)
 * time : O(logn) space : O(1)
 * @param x
 * @return
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
```


## S.31_Next Permutation

原题地址：https://leetcode.com/problems/next-permutation/

**补充知识**：

​	参考：http://www.cnblogs.com/houkai/p/3675270.html

​	http://www.cnblogs.com/houkai/p/3675270.html

​	什么是产生下一个排列数？

​	全排序：

​	从n个不同元素中任取m（m≤n）个元素，按照一定的顺序排列起来，叫做从n个不同元素中取出m个元素的一个排列。当m=n时所有的排列情况叫全排列。例如n=3，全排序为：123、132、213、231、312、321共6种。

​	字典序法：

​	对给定的字符集中的字符规定了一个先后关系，在此基础上规定两个全排列的先后是：从左到右逐个比较对应的字符大小。字符集{1,2,3}，较小的数字较先，这样按字典序生成的全排列即：123、132、213、231、312、321。

​	所谓的产生下一个排列数是，输入一个全排列中的一串数字，按照字典序法给出排在该串数字之后的下一串数字，就是产生下一个排列数。输入：123，输出132。输入12435，输出12453。

思路：

​	1.从数列的右边向左寻找连续递增序列, 例如对于：1,3,**5,4,2**，其中5-4-2即为递增序列。找到5的下标，标记为index。

​	2.从上述序列中找一个比它前面的数（3）大的最小数（4），把（4）的下标标记为exchangeIndex，并将且交换这两个数。于是1,3,5,4,2->1,4,**5,3,2**，此时交换后的依然是递增序列。

​	3.新的递增序列逆序，即：1,4,5,3,2 => 1,4,2,3,5。把5，3，2改为升序2，3，5。



代码：

```javascript
// 从前往后找第一个破坏单调递增性质得位置。(x,y)
// 将array[x]与array[y,n)中比 array[x]大的最小的数字交换，注意是考后的。
// 将array[y,n)反过来。
// 别忘了处理整个array本身就是单调递减得情况。


// find the piovt point (x,y), if not found, reverse [0,n) and return
// find the smallest element  > x from [y, n)
// swap (x, z)
// reverse [y, n)

/**
 * * Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 1,2,3 → 1,3,2
 3,2,1 → 1,2,3
 1,1,5 → 1,5,1

 // 1　　2　　7　　4　　3　　1
 ^
 // 1　　2　　7　　4　　3　　1
 ^
 // 1　　3　　7　　4　　2　　1
 ^            ^
 // 1　　3　　1　　2　　4　　7
 ^   ^    ^   ^

 7 4 3 2 1 1

 time : O(n);
 space : O(1);
 * @param {number[]} nums
 */
var nextPermutation = function(nums) {
    let firstSmall = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            firstSmall = i;
            break;
        }
    }

    if (firstSmall == -1) {
        nums.reverse();
        return;
    }

    let firstLarge = -1;
    for (let i = nums.length - 1; i > firstSmall; i--) {
        if (nums[i] > nums[firstSmall]) {
            firstLarge = i;
            break;
        }
    }

    const swap = function (arr, i, j) {
        let temp = 0;
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    swap(nums, firstSmall, firstLarge);

    const reverseArr = function (arr, i, j) {
        while (i < j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    reverseArr(nums,firstSmall+1, nums.length - 1);
};
nums = [1,2,7,4,3,1];
// nums = [3,2,1];
nextPermutation(nums)
console.log(nums); // [ 1, 3, 1, 2, 4, 7 ]
```


## S.36_Valid Sudoku

原题地址：https://leetcode.com/problems/valid-sudoku/

思路： 在已经给出的数独中，判断每一行、每一列、每一个小9宫格不存在重复元素。

代码：

```java
private  Set<Character> set = new HashSet<Character>();
public boolean check(char c){
		if(c == '.'){
			return true;
		}else if(c >= '1' && c <= '9'){
			if(set.contains(c)){
				return false;
			}else{
				set.add(c);
				return true;
			}
		}else{
			return false;
		}
	}
	public boolean isValidSudoku(char[][] board) {
		
		//比较每一个行
		for(int i =0; i<9; i++){
			for(int j=0; j<9; j++){
				if(!check(board[i][j])) 
					return false;
			}
			set.clear();     //这一步很关键，每次比较新的一个行时，都要清空set.
		}
		
		//比较每一个列
		for(int i=0; i<9; i++){
			for(int j=0; j<9; j++){
				if(!check(board[j][i]))
					return false;
			}
			set.clear();
		}
		
		//比较每一9宫格内部，元素是 不重复的
		for(int i=0; i<9; i++){
			for(int j=0; j<9; j++){
				if(!check(board[i/3*3+j/3][i%3*3+j%3]))   //难点
					return false;
			}
			set.clear();
		}
		
		return true;
	}
```

难点1：

​	数独中一共有9个3*3的格子，判断这个9个格子元素是否重复的时候，条件是这样的：

```java
for(int i=0; i<9; i++){
			for(int j=0; j<9; j++){
				if(!check(board[i/3*3+j/3][i%3*3+j%3]))   //难点
					return false;
			}
}
```

难点2：

​	如何判断一行中有没有重复元素，使用HashSet。每次遍历的元素先判断HashSet中没有，如果有就是包含重复元素。如果没有，则表示没有，并把该元素放到HashSet中。


## S.48_Rotate Image

原题地址：https://leetcode.com/problems/rotate-image/

思路：

纯粹考察如何旋转的技巧。

1.先沿着副对角线交换元素。

2.再沿着水平线以镜像方式交换所有元素，就是顺时针旋转90度的结果。

代码：

```javascript
var rotate = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < m; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][m-1-j];
            matrix[i][m-1-j] = temp;
        }
    }
    return matrix;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotate(matrix)); // [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
```

## S.66_Plus One

原题地址：https://leetcode.com/problems/plus-one/

思路：

这套题目是一个实现题。大数题目。

1.先对原数组进行处理。从数组最后一位开始往前检查，如果当前数字是<9的，说明你加1无需进位，从循环跳出即可，如果当前数字等于9，说明加1涉及进位，且加1后当前数字应记为0，继续循环处理。

2.当对原数组处理完后，还需要判断当前第0位是不是已经变为0了，如果已经变为0了说明是类似99+1这种，需要进位。其他则不需要。

代码：

```javascript
/**
 * * 66. Plus One
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

 You may assume the integer do not contain any leading zero, except the number 0 itself.

 The digits are stored such that the most significant digit is at the head of the list.

 case1 : 1011 1012
 case2 : 1099 1100
 case3 : 9999 10000

 time : O(n);
 space : O(n);
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0
        }
    }

    let res = new Array(len+1).fill(0);
    res[0] = 1
    return res;
};

let nums = [1,0,1,1];
console.log(plusOne(nums)); // [ 1, 0, 1, 2 ]

```
## S.55_Jump Game
给出一个非负正数数组，初始情况下就是在第一个的位置。每个元素的值代表最大可以跳跃的步数。 检查能不能跳到最后一步。

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.


```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 * For example
 * A = [2,3,1,1,4] return true;
 */
var canJump = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > max) return false;
        let cur = i + nums[i];
        max = Math.max(cur, max);
    }
    return max >= nums.length - 1;
};
```

## S.45_Jump Game II
与上一题的区别
Your goal is to reach the last index in the minimum number of jumps.

```javascript
var jump = function(nums) {
    let start = 0, end = 0, step = 0;
    if (nums.length == 1) return 0;
    while (start <= end) {
        let end_new = end;
        for (let i = start; i <= end; i++) {
            end_new = Math.max(end_new, nums[i]+i);
            if (end_new >= nums.length - 1) {
                return step+1;
            }
        }
        step++;
        start = end + 1;
        end = end_new;
    }
};

console.log(removeDuplicates([2,3,1,1,4]));
```



## S.73_Set Matrix Zeroes

原题地址：https://leetcode.com/problems/set-matrix-zeroes/

思路：

​	方法1：空间复杂度O(m+n).

​	建立一个长度为m的数组，记录m行中哪一行有0。建立一个长度为n的数组，记录n列中哪一列存在0.然后访问这两个数组，并且对原来的matrix做更新。

代码：

​	空间复杂度：O(m+n). 时间复杂度O(m*n).

```java
public void setZeroes(int[][] matrix) {
       
		int m = matrix.length; //返回二维数组行数
		int n = matrix[0].length; //返回二维数组列数
		int[] rows = new int[m];
		int[] columns = new int[n];
		
		for(int i = 0; i < m; i++){
			for(int j = 0; j < n; j++){
				if(matrix[i][j] == 0){
					rows[i] = -1;  //记录哪一行有0.并用-1进行标记。
					columns[j] = -1;  //记录哪一列有0.并用-1进行标记。
				}
			}
		}
		
		for(int i = 0; i < m; i++){
			if(rows[i] == -1){
				for(int j = 0; j < n; j++){
					matrix[i][j] = 0;   //把对应行的元素全部置为0.
				}
			}
		}
		
		for(int i = 0; i < n; i++){
			if(columns[i] == -1){
				for(int j = 0; j < m; j++){
					matrix[j][i] = 0;  //把对应列的元素全部置为0.
				}
			}
		}
    }
```

## S.134_Gas Station

原题地址：https://leetcode.com/problems/gas-station/

思路1：

​	gas和cost是两个数组，并且gas中不同位置代表了不同的station所拥有的不同油量。理解上，gas要作为一个循环数组，从任何一个位置出发都可以再回到这个位置。

​	初始状态：gas[i] - cost[i] > 0.就可以从i位置达到i+1的位置。

​	随后状态：上次剩余油量  + gas[i+1]  - cost[i+1] > 0就可以到达i+2的位置。

代码：时间复杂度O(n^2).

```java
public int canCompleteCircuit(int[] gas, int[] cost) {
		int length = gas.length;
		int remain = 0;
		for(int startIndex = 0; startIndex < length; startIndex++){   //把每个点作为开始点进行判断
			int positions = 1;
			int index = startIndex;
			while(remain+gas[index]-cost[index] >= 0){   //
				if(positions == length)
					return startIndex;
				positions++;
				remain = remain + gas[index] - cost[index];
				index = (index+1) % length;
			}
		}
		return -1;
	}
```

思路2：

​	本题如果有解，那么题目中gas[0]+...+gas[n]的和一定大于cost[0]+...+cost[n]的和。并且起始位置是第一次出现gas[0]+...+gas[i]>cost[0]+...+cost[i]的位置。前i-1个位置，gas的和是小于cost的和，知道出现第i个位置，gas的和大于cost的和。

​	本题如果无解，那么题目中gas[0]+...+gas[n]的和一定小于cost[0]+...+cost[n]的和。

​	于是：

​	如果total<0则一定没有解，因为不管从哪个位置开始，一定无法通过最后一个加油站。

​	如果total>=0一定有解，而且这个解一定是最后一个sum<0的下一个位置（j=i+1）。

代码：时间复杂度O(n)

```java
public int canCompleteCircuit(int[] gas, int[] cost) {
		int length = gas.length;
		int total = 0;
		int sum = 0;
		int j = 0;
		for(int i = 0; i < length; i++){
			sum += (gas[i] - cost[i]);
			total += (gas[i] - cost[i]);
			//只要第一次出现gas[i]-cost[i]>0，那么i就可以作为start。
			//并且此后一直用sum做判断，是否一直满足sum>0。一旦出现一次sum<0,重新修改start的值。
			if(sum < 0){  
				j = i + 1;
				sum = 0;
			}
		}
		if(total >= 0)
			return j;
		else
			return -1;
	}
```

## S.135_Candy

原题地址：https://leetcode.com/problems/candy/

思路：

​	这道题和Trapping water那个是一样的想法，因为无论是水坑还是得到糖的小朋友，影响因素都不只一边，都是左右两边的最小值/最大值来决定的。做法是分别从左右两边遍历数组。

​	1.leftResult数组存从左边遍历，当前小朋友对比其左边小朋友，他能拿到糖的数量；

​	2.rightResult数组存从右边遍历，当前小朋友对比其右边小朋友，他能拿到的糖的数量。

​	3.最后针对这两个数组，每个小朋友能拿到的糖的数量就是这两个数最大的那个数，求总加和就好了。

代码：

```java
public int candy(int[] ratings){
		
		int length = ratings.length;
		int[] leftResult = new int[length];
		int[] rightResult = new int[length];
		//每个元素只和左边元素相比较
		leftResult[0] = 1;
		for(int i = 1; i < length; i++){
			if(ratings[i] > ratings[i-1])
				leftResult[i] = leftResult[i-1]+1;
			else
				leftResult[i] = 1;
		}
		//每个元素只和右边元素比较
		rightResult[length-1] = 1;
		for(int i = length-2; i >= 0; i--){
			if(ratings[i] > ratings[i+1])
				rightResult[i] = rightResult[i+1]+1;
			else
				rightResult[i] = 1;
		}
		int sum = 0;
		for(int i = 0; i<length; i++){
			if(leftResult[i] > rightResult[i])
				sum += leftResult[i];
			else
				sum += rightResult[i];
		}
		return sum;
	}
```

## S.136_Single Number

原题地址：https://leetcode.com/problems/single-number/

思路：

​	这道题目要求使用线性的时间复杂度，和很少的附加空间。运用亦或^，相同为0，不同为1的性质。0^x = x.设定一个初始值num=0，然后和数组中所有元素亦或，最后得到的那个值就是出现次数为奇数次的值。 因此出现次数为1次的数字就产生了。

代码：

```java
public int singleNumber(int[] nums) {
		int num = 0;
		int length = nums.length;
		for(int i = 0; i < length; i++){
			num = num^nums[i];
		}
		return num;
	}
```

##S.137_ Single Number II
原题地址：https://leetcode.com/problems/single-number-ii/
思路1：

​	扫描数组，把数据读入hashMap中，然后遍历hashMap，找到按个次数不是3的元素。空间上增加了hashMap的空间，时间上多遍历一次hashMap。

代码：

```java
public int singleNumber(int[] nums) {
		int length = nums.length;
		HashMap<Integer,Integer> map = new HashMap<>();
		for(int i = 0; i < length; i++){
			if(map.containsKey(nums[i])){
				map.put(nums[i], map.get(nums[i])+1);
			}
			else
				map.put(nums[i], 1);
		}
		int result = 0;
		Iterator<java.util.Map.Entry<Integer,Integer>> it = map.entrySet().iterator();
		while(it.hasNext()){
			Map.Entry<Integer, Integer> entry = it.next();
			Integer key = entry.getKey();
			Integer value = entry.getValue();
			if(value != 3){
				result = key;
				break;
			}
		}
		return result;
	}
```







