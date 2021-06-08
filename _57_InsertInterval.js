/**
 * * 57. Insert Interval
 * Example 1:
 Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

 Example 2:
 Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

 This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
 |__|  |__|  |____| |____|  |__|
        |_____________|

 time : O(n)
 space : O(n)
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (newInterval == null) return intervals;
    let res= [];
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }

    while(i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    res.push(newInterval);

    while (i < intervals.length) {
        res.push(intervals[i]);
        i++;
    }
    return res;
};


let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
console.log(insert(intervals, [4,9]));