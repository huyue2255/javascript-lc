/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8

 time : O(n)
 space : O(n)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(-1);
    let cur = dummy;
    let p1 = l1;
    let p2 = l2;
    let sum = 0;

    while (p1 != null || p2 != null) {
        if (p1 != null) {
            sum += p1.val;
            p1 = p1.next;
        }

        if (p2 != null) {
            sum += p2.val;
            p2 = p2.next;
        }
        cur.next = new ListNode(sum % 10);
        sum = Math.floor(sum / 10);
        cur = cur.next;
    }
    if (sum == 1) {
        cur.next = new ListNode(1)
    }
    return dummy.next;
};


let l3 = new ListNode(3);
let l2 = new ListNode(4);
let l1 = new ListNode(2);
l1.next = l2;
l2.next = l3;
l3.next = null;

let l13 = new ListNode(4);
let l12 = new ListNode(6);
let l11 = new ListNode(5);
l11.next = l12;
l12.next = l13;
l13.next = null;

console.log(addTwoNumbers(l1,l11))