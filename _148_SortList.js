/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 148. Sort List
 * Sort a linked list in O(n log n) time using constant space complexity.
 *  很重要=》比较难理解的是 line: 60 =》 return merge(sortList(one), sortList(two));
 * time : O(nlogn)
 * space : O(n)
 * @param {ListNode} head
 * @return {ListNode}
 * */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function findMiddle(head) {
    if (head == null || head.next == null) return head;
    let slow = head;
    let fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function merge(l1, l2) {
    let dummy = new ListNode(-1);
    let cur = dummy;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if (l1 != null) {
        cur.next = l1;
    } else {
        cur.next = l2;
    }
    return dummy.next;
}

var sortList = function(head) {
    if (head == null || head.next == null) return head;
    let middle = findMiddle(head);
    let two = middle.next;
    let one = head;
    middle.next = null;
    return merge(sortList(one), sortList(two));
};

let l4 = new ListNode(3);
let l3 = new ListNode(1);
let l2 = new ListNode(2);
let l1 = new ListNode(4);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = null;


console.log(sortList(l1))