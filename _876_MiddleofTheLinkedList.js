/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var middleNode = function(head) {
    if (head == null) return null;
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
let l4 = new ListNode(4);
let l3 = new ListNode(3);
let l2 = new ListNode(2);
let l1 = new ListNode(1);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = null;

console.log(middleNode(l1))

