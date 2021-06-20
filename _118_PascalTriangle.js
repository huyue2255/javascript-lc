/**
 * 118. Pascal's _120_Triangle
 * For example, given numRows = 5,
 Return

 [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
 ]

 time : O(n^2)
 space : O(n)

 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    let list = [];
    for (let i = 0; i < numRows; i++) {
        // insert
        list.splice(0,0,1);
        let size = list.length; // 这个很重要，list是在动态变化的，要先把他原来的长度先存来。
        for (let j = 1; j < size - 1; j++) {
            // replace
            list.splice(j,1,list[j] + list[j+1]);
        }
        // shallow copy
        res.push(list.slice());
    }
    return res;
};


console.log(generate(5))

