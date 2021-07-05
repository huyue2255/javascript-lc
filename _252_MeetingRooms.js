/**
 * 252. Meeting Rooms
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
 * determine if a person could attend all meetings.

 For example,
 Given [[0, 30],[5, 10],[15, 20]],
 return false.

 time : O(nlogn)
 space : O(1)
 思路： 先排序，用start来排序。 然后只要找到前一个结束比后一个开始晚就行了。
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {

    let arr = intervals.sort((a,b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        if (arr[i-1][1] > arr[i][0]) {
            return false;
        }
    }
    return true;
};

let arr = [[0, 30],[5, 10],[15, 20]];
console.log(canAttendMeetings(arr)); // false
