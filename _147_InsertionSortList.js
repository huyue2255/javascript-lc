/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 147. Insertion Sort List
 * time : O(n^2)
 * space : O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var insertionSortList = function (head) {
    if (head == null || head.next == null) return head;
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = null;
    let temp = null;
    let cur = head;
    while (cur != null && cur.next != null) {
        if (cur.val <= cur.next.val) {
            cur = cur.next;
        } else {
            prev = dummy;
            temp = cur.next;
            cur.next = temp.next;

            while (prev.next.val <= temp.val) {
                prev = prev.next;
            }
            temp.next = prev.next;
            prev.next = temp;
        }
    }
    return dummy.next;
};
let l4 = new ListNode(3);
let l3 = new ListNode(1);
let l2 = new ListNode(2);
let l1 = new ListNode(4);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = null;

console.log(insertionSortList(l1))