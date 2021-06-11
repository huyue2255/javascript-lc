/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * * Given a linked list, swap every two adjacent nodes and return its head.

 For example,
 Given 1->2->3->4, you should return the list as 2->1->4->3.


 time : O(n);
 space : O(1);
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var swapPairs = function(head) {
    if (head == null || head.next == null) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let l1 = dummy;
    let l2 = head;
    while (l2 != null && l2.next != null) {
        let newStart = l2.next.next;
        l1.next = l2.next;
        l2.next.next = l2;
        l2.next = newStart;
        l1 = l2;
        l2 = l2.next;
    }
    return dummy.next;
};

let l3 = new ListNode(2);
let l2 = new ListNode(2);
let l1 = new ListNode(1);
l1.next = l2;
l2.next = l3;
l3.next = null;

console.log(swapPairs(l1));