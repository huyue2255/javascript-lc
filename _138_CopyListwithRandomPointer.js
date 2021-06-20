/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 138. Copy List with Random Pointer
 * A linked list is given such that each node contains an additional random pointer which could
 * point to any node in the list or null.

 Return a deep copy of the list
 讲解视频： https://www.youtube.com/watch?v=UWt3qmjx8qo
 特别要注意的是这里的null!!!!!! => new Node(cur.val, null, null);
 time : O(n);
 space : O(n);
 * @param {Node} head
 * @return {Node}
 */
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

var copyRandomList = function (head) {
    if (!head) return head;
    let map = new Map();
    let cur = head;
    while (cur != null) {
        map.set(cur, new Node(cur.val, null, null));
        cur = cur.next;
    }

    cur = head;
    while (cur != null) {
        map.get(cur).next = cur.next !== null ? map.get(cur.next) : null;
        map.get(cur).random = cur.random !== null ? map.get(cur.random) : null;
        cur = cur.next;
    }
    return map.get(head);
};


