/**
    再来看下面一个例子，有如下的一个数组: 1　　2　　7　　4　　3　　1
    下一个排列为：1　　3　　1　　2　　4　　7
    那么是如何得到的呢，我们通过观察原数组可以发现，如果从末尾往前看，数字逐渐变大，到了2时才减小的，然后再从后往前找第一个比2大的数字，是3，那么我们交换2和3，再把此时3后面的所有数字转置一下即可，步骤如下：

         x   y
    1　　2　　7　　4　　3　　1

    1　　2　　7　　4　　3　　1

    1　　3　　7　　4　　2　　1

    1　　3　　1　　2　　4　　7

    find the pivot point (x=>2,y=>7), if not found, reverse [0,n) and return
    find the smallest element z=>3  > x from [y=>7, n=>1)
    swap (x, z)
    reverse [y, n)

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


