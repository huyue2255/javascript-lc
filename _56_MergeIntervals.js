/**
 * * 56. Merge Intervals
 * * For example,
 Given [1,3],[2,6],[8,10],[15,18],
 return [1,6],[8,10],[15,18].

 sta     end
 |___|       |____|
 |_____|       |___|

 time : O(nlogn) space : O(n)
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function(intervals) {
//     if (intervals == null || intervals.length <= 1) return intervals;
//     intervals = intervals.sort((a,b) => a[0] - b[0]);
//     let values = []
//
//     for (interval of intervals) {
//         if (values.length === 0 || values[values.length - 1][1] < interval[0]) {
//             values.push(interval)
//         } else {
//             values[values.length - 1][1] = Math.max(values[values.length - 1][1], interval[1])
//         }
//     }
//     return values
// };


var merge = function(intervals) {
    if (intervals == null || intervals.length <= 1) return intervals;
    intervals = intervals.sort((a,b) => a[0] - b[0]);

    let start = intervals[0][0];
    let end = intervals[0][1];
    let values = [];

    for (interval of intervals) {
        if (interval[0] <= end) {
            end = Math.max(end, interval[1])
        } else {
            values.push([start, end]);
            start = interval[0];
            end = interval[1];
        }
    }
    values.push([start, end]);
    return values
};

let intervals = [[1,3],[8,10],[2,6],[15,18]]
console.log(merge(intervals));