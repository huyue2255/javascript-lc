/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * 133. Clone Graph
 * 无向图，深度优先，广度有优先。
 * time : O(m + n) m : nodes n : edges
 * space : O(m)
 * @param {Node} node
 * @return {Node}
 */

// BFS
var cloneGraph = function(node){
    if(!node) return null;
    let map = new Map();
    let queue = [];
    map.set(node, new Node(node.val));
    queue.push(node);
    while (queue.length != 0) {
        let n = queue.shift();
        for (let nei of n.neighbors) {
            if (!map.has(nei)) {
                queue.push(nei);
                map.set(nei, new Node(nei.val));
            }
            map.get(n).neighbors.push(map.get(nei));
        }
    }
    return map.get(node);
};

// DFS 这个暂时还没有看懂
var cloneGraph = function(node, map = new Map()) {
    if(!node) return null
    if(map.has(node)) return map.get(node)
    const n = new Node(node.val)
    map.set(node, n)
    for(let k of node.neighbors){
        n.neighbors.push(cloneGraph(k, map))
    }
    return n;
};

let node2 = new Node(2,[])
let node3 = new Node(3,[])
// let node4 = new Node(1,[node2,node3])
let node1 = new Node(1,[node2,node3]);



cloneGraph2(node1)



