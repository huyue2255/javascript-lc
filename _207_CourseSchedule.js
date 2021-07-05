/**
 * 207. Course Schedule
 * There are a total of n courses you have to take, labeled from 0 to n - 1.

 Some courses may have prerequisites, for example to take course 0 you have to first take course 1,
 which is expressed as a pair: [0,1]

 Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

 For example:

 2, [[1,0]]
 There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

 2, [[1,0],[0,1]]
 There are a total of 2 courses to take. To take course 1 you should have finished course 0,
 and to take course 0 you should also have finished course 1. So it is impossible.

 time : O(V + E)
 space : O(n)
 思路： BFS
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // 当前这门课需要几个前置课，indegree[] => key: pair[0] 课程， value：几个前置课
    let indegree = new Array(numCourses).fill(0);
    let res = numCourses;
    for (let pair of prerequisites) {
        indegree[pair[0]]++;
    }

    // 找到进入的课程，就是不需要先修课程的课，放到queue里面去
    let queue = [];
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] == 0) {
            queue.push(i);
        }
    }

    // queue拿出来，计算个数。 res最后看是不是0，是的话就是可以了。

    while (queue.length != 0) {
        // pre => 表示可以修的课程
        let pre = queue.shift();
        res--;
        for (let pair of prerequisites) {
            // pair[1] => 表示需要先修的课程，如果已经有了，就把 indegree[pair[0]]--； 最后在判断是不是0，是的话就放到queue里面去。
            if (pair[1] == pre) {
                indegree[pair[0]]--;
                if (indegree[pair[0]] == 0) {
                    queue.push(pair[0]);
                }
            }
        }
    }
    return res == 0;
};