/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Merge two sorted linked lists and return it as a new list. The new list should be made
 * by splicing together the nodes of the first two lists.

 time : O(n);
 space : O(n);
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(0);
    let cur = dummy;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            cur.next = l1;
            cur = cur.next;
            l1 = l1.next;
        } else {
            cur.next = l2;
            cur = cur.next;
            l2 = l2.next;
        }
    }

    if (l1 != null) {
        cur.next = l1;
    }

    if (l2 != null) {
        cur.next = l2;
    }

    return dummy.next;
};

// let l3 = new ListNode(2);
let l2 = new ListNode(2);
let l1 = new ListNode(1);
l1.next = l2;
l2.next = null;
// l3.next = null;

let l31 = new ListNode(12);
let l21 = new ListNode(9);
let l11 = new ListNode(3);
l11.next = l21;
l21.next = l31;
l31.next = null;

console.log(mergeTwoLists(l1,l11))