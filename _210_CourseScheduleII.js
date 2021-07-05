/**
 * 210. Course Schedule II
 * There are a total of n courses you have to take, labeled from 0 to n - 1.

 Some courses may have prerequisites, for example to take course 0 you have to first take course 1,
 which is expressed as a pair: [0,1]

 Given the total number of courses and a list of prerequisite pairs, return the resing of courses you should
 take to finish all courses.

 There may be multiple correct ress, you just need to return one of them. If it is impossible to finish all courses,
 return an empty array.

 For example:

 2, [[1,0]]
 There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course res
 is [0,1]

 4, [[1,0],[2,0],[3,1],[3,2]]
 There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2.
 Both courses 1 and 2 should be taken after you finished course 0. So one correct course res is [0,1,2,3].
 Another correct resing is[0,2,1,3].


   -> 1 ->
 0         3
   -> 2 ->


 入度 = 0 => BFS

 0 : 0
 1 : 0
 2 : 0
 3 : 2

 queue : 3
 res : 0,1,2,3

 time : O(V + E)
 space : O(n)
 思路：BFS
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let indegree = new Array(numCourses).fill(0);
    let res = new Array(numCourses);
    let k = 0;
    for (let pair of prerequisites) {
        indegree[pair[0]]++;
    }
    let queue = [];
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] == 0) {
            queue.push(i);
            res[k++] = i;
        }
    }

    while (queue.length != 0) {
        let pre = queue.pop();
        for (let pair of prerequisites) {
            if (pair[1] == pre) {
                indegree[pair[0]]--;
                if (indegree[pair[0]] == 0) {
                    queue.push(pair[0]);
                    res[k++] = pair[0];
                }
            }
        }
    }
    return (k == numCourses) ? res : [];
};

let course = [[1,0],[2,0],[3,1],[3,2]];

console.log(findOrder(4,course));
