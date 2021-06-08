/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
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
var detectCycle = function (head) {
    if (head == null || head.next == null) return null;
    let slow = head;
    let fast = head;

    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
            if (fast == slow) {
                let slow2 = head;
                while(slow != slow2) {
                    slow = slow.next;
                    slow2 = slow2.next;
                }
                return slow;
            }
        }
        return null;
};

let l4 = new ListNode(4);
let l3 = new ListNode(3);
let l2 = new ListNode(2);
let l1 = new ListNode(1);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l3;

console.log(detectCycle(l1));
