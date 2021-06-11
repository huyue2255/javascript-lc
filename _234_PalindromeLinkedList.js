/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function findMiddle(head) {
    let slow = head;
    let fast = head;
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}


function reverse(head) {
    if (head == null || head.next == null) return head;
    let pre = null;
    let cur = head;
    while(cur != null) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}
var isPalindrome = function(head) {
    let middleNode = findMiddle(head);
    middleNode.next = reverse(middleNode.next);
    let q = head;
    let p = middleNode.next;
    while(q != null && p != null) {
        if (p.val != q.val) return false;
        p = p.next;
        q = q.next;
    }
    return true;
};

let l3 = new ListNode(2);
let l2 = new ListNode(2);
let l1 = new ListNode(1);
l1.next = l2;
l2.next = l3;
l3.next = null;

console.log(isPalindrome(l1));