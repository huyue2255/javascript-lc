/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 61. Rotate List
 * For example:
 Given 1->2->3->4->5->NULL and k = 2,
 return 4->5->1->2->3->NULL.

 先让他首尾相连，
 time : O(n);
 space : O(1);
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var rotateRight = function(head, k) {
    if(head == null || head.next == null) return head;

    let count = 1;
    let tail = head;
    // 收尾相连十分的巧妙。 k % len === 0.就不用单独讨论了！！！
    while (tail.next != null) {
        tail = tail.next;
        count++;
    }
    tail.next = head;
    for (let i = 1; i < count - k % count; i++) {
        head = head.next;
    }
    let newHead = head.next;
    head.next = null;
    return newHead;
};

let l3 = new ListNode(3);
let l2 = new ListNode(2);
let l1 = new ListNode(1);
l1.next = l2;
l2.next = l3;
l3.next = null;

console.log(rotateRight(l1, 2))