// const insertionSort = (nums) => {
//     for (let i = 1; i < nums.length; i++) {
//         let j = i - 1
//         let tmp = nums[i]
//         while (j >= 0 && nums[j] > tmp) {
//             nums[j + 1] = nums[j]
//             j--
//         }
//         nums[j+1] = tmp
//     }
//     return nums
// }


var a = [10,38,45,50,48,13,27,20];
var index = 0;
for(var i = 1; i < a.length; i ++){
    index = i;
    for(var j = i - 1; j >= 0; j--){
        if(a[i] < a[j] ){
            console.log(j)
            index = j;
        }
    }
    a.splice(index,0,a[i]);  //插入a[i]
    a.splice(i+1,1);  // 由于数组变了，所以原先a[i]的值到a[i+1]去了，删掉它
}
console.log(a);
