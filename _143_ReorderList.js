/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 143. Reorder List
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

 You must do this in-place without altering the nodes' values.

 For example,
 Given {1,2,3,4}, reorder it to {1,4,2,3}.

 time : O(n)
 space : O(1)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

function findMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function reverseNode(head) {
    if (head == null || head.next == null) return head;
    let pre = null;
    let cur = head;
    while(cur != null) {
        let nextNode = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextNode;
    }
    return pre;
}

function mergeList(l1, l2) {
    if (l1 == null && l2 == null) return null;
    let dummy = new ListNode(0);
    let cur = dummy;

    while (l1 != null && l2 != null) {
        cur.next = l1;
        l1 = l1.next;
        cur.next.next = l2;
        l2 = l2.next;
        cur = cur.next.next;
    };

     if (l1 != null) {
        cur.next = l1;
    };

    if (l2 != null) {
        cur.next = l2;
    };
    return dummy.next;
}

var reorderList = function(head) {
    if (head == null || head.next == null) return head;
    let mid = findMiddle(head);
    let one = head;
    let two = mid.next;
    mid.next = null;
    let new_head = reverseNode(two);
    return mergeList(one,new_head);
};

function print(head) {
    while (head != null){
        console.log(head.val);
        head = head.next;
    }
}

let l6 = new ListNode(6);
let l5 = new ListNode(5);
let l4 = new ListNode(4);
let l3 = new ListNode(3);
let l2 = new ListNode(2);
let l1 = new ListNode(1);
l1.next = l2;
l2.next = l3;
l3.next = l4;

l4.next = l5;
l5.next = null;
// l6.next = null;

reorderList(l1);
print(l1);
// console.log(mergeList(l1, l4));
// print(l1);