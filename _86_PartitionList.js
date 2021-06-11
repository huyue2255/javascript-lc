/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * * 86. Partition List
 * Given a linked list and a value x, partition it such that all nodes less than x come before nodes
 * greater than or equal to x.

 You should preserve the original relative order of the nodes in each of the two partitions.

 For example,
 Given 1->4->3->2->5->2 and x = 3,
 return 1->2->2->4->3->5.


 1->4->3->2->5->2 and x = 3
 smallHead -> 1 -> 2 -> 2 ->
 small
 bigHead -> 4 -> 3 -> 5 ->
 big

 time : O(n)
 space : O(n)
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var partition = function(head, x) {
    if (head == null) return head;
    let dummyHeadSmall = new ListNode();
    let dummyHeadBig = new ListNode();
    let curSmall = dummyHeadSmall;
    let curBig = dummyHeadBig;
    let cur = head;

    while (cur != null) {
        if (cur.val < x) {
            curSmall.next = cur;
            curSmall = curSmall.next;
        } else {
            curBig.next = cur;
            curBig = curBig.next;
        }
        cur = cur.next;
    }
    curBig.next = null;
    curSmall.next = dummyHeadBig.next;
    return dummyHeadSmall.next;
};

let l5 = new ListNode(13);
let l4 = new ListNode(12);
let l3 = new ListNode(6);
let l2 = new ListNode(2);
let l1 = new ListNode(1);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = null;

console.log(partition(l1, 5))