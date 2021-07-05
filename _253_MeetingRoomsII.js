/**
 * 253. Meeting Rooms II

 |___| |____|
 |_____| |___|

 start:
 | |   |   |
 i
 end :
 |   |  |  |
 end

 time : O(nlogn) space : O(n)
 思路： 这道题目有一个值得注意的问题是，一个会议结束之后，可以安排另外一个会议。从而达到最小房间数。
 有两种方法，一种是扫描线算法，一种是PriorityQueue。

 * @param {number[][]} intervals
 * @return {number}
 */
// 方法一就是扫描线，两个数组存start and end. 然后不断比较， intervals[start] < intervals[end], room++ , else end++;
// 你开始的时候，还没有结束
var minMeetingRooms = function(intervals) {
    let starts = new Array(intervals.length);
    let ends = new Array(intervals.length);
    let res = 0;
    for ( let i = 0; i < intervals.length; i++) {
        starts[i] = intervals[i][0];
        ends[i] = intervals[i][1];
    }
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    let end = 0
    for (let i = 0; i < intervals.length; i++) {
        if (starts[i] < ends[end]) {
            res++;
        } else {
            end++;
        }
    }
    return res;
};

// 第二种方法完全就是练习写一个PriorityQueue.
function PriorityQueue() {
    this.collection = [];

    this.enqueue = function(ele) {
        let added = false;
        if (this.collection.isEmpty) {
            this.collection.push(ele);
        } else {
            for (let i = 0; i < this.collection.length; i++) {
                if (ele[1] < this.collection[i][1]) {
                    // insert at index i
                    this.collection.splice(i, 0, ele);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(ele);
            }
        }
    }

    this.dequeue = function() {
        return this.collection.shift();
    }

    this.front = function() {
        return this.collection[0];
    }

    this.size = function() {
        return this.collection.length;
    }

    this.isEmpty = function() {
        return (this.collection.length == 0);
    }

    this.print = function() {
        console.log(this.collection);
    }
}

var minMeetingRooms1 = function(intervals) {
    let pq = new PriorityQueue();

    intervals.sort((a,b) => a[0] - b[0]);
    pq.enqueue(intervals[0]);
    let res = 1;
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i];
        let preMeeting = pq.dequeue();
        if (cur[0] >= preMeeting[1]) {
            preMeeting[1] = cur[1];
        } else {
            res++;
            pq.enqueue(cur);
        }
        pq.enqueue(preMeeting);
    }
    return res;
};
let intervals = [[7,10],[2,4]];
console.log(minMeetingRooms(intervals)); //1

