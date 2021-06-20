/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head == null) {
        return head;
    }

    let count = 1;
    let cur = head;
    while (cur.next != null) {
        cur = cur.next;
        count++;
    }
    // 注意这里是一种让linkedlist为空的操作方法。
    if (n >= count) {
        head = head.next;
        return head;
    }

    let m = count - n;
    cur = head;
    for (let i = 1; i < m; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return head;
};