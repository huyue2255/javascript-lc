var selectionSort = function(arr) {
    let temp, global;
    for (let i = 0; i < arr.length - 1; i++) {
        global = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[global]) {
                global = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[global];
        arr[global] = temp;
    }
    return arr;
}

let arr = [11,2,4,8,];
console.log(selectionSort(arr))