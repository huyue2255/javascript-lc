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
var deleteDuplicates = function(head) {
    if (head ==null || head.next == null) return head;
    let dummy = new ListNode();
    dummy.next = head;
    let p = head;
    while (p.next != null) {
        if (p.val == p.next.val) {
            let sameVal = p.val;
            while (p.next != null && p.next.val == sameVal) {
                p.next = p.next.next;
            }
        }
        p = p.next;
    }
    return dummy.next;
};