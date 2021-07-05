/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeElements = function(head, val) {
    if (head == null) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    while (prev != null && prev.next != null) {
        if (prev.next.val != val) {
            prev = prev.next;
        } else {
            prev.next = prev.next.next;
        }
    }

    return dummy.next;
};
let l4 = new ListNode(6);
let l3 = new ListNode(3);
let l2 = new ListNode(2);
let l1 = new ListNode(6);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = null;
console.log(removeElements(l1, 6))