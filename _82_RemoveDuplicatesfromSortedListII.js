/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * * 82. Remove Duplicates from Sorted List II (83. Remove Duplicates from Sorted List: follow up)
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

 For example,
 Given 0->1->2->3->3->4->4->5, return 1->2->5.
 Given 0->1->1->1->2->3, return 2->3.
 time : O(n);
 space : O(1);
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head == null || head.next == null) return head;
    let dummy = new ListNode();
    dummy.next = head;
    let p = dummy;
    while(p.next != null && p.next.next != null) {
        if (p.next.val == p.next.next.val) {
            let sameVal = p.next.val;
            while(p.next != null&& p.next.val == sameVal) {
                p.next = p.next.next;
            }
        }else {
            p = p.next;
        }
    }
    return dummy.next;
};