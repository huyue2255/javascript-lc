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
// nums = [1,2,7,4,3,1];
nums = [3,2,1];
nextPermutation(nums)
console.log(nums);

