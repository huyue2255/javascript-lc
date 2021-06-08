/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 *
 * Null -> Node1 => Node2 => Node3=> Node4
 * pre     cur      next
 *         pre      cur
 * @param {ListNode} head
 * @return {ListNode}
 */


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }

    let pre = null;
    let cur = head;
    while (cur != null) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};

// Method 1 recursion

var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }

    let new_head = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return new_head;
};


let l3 = new ListNode(3);
let l2 = new ListNode(2);
let l1 = new ListNode(1);
l1.next = l2;
l2.next = l3;
l3.next = null;


console.log(reverseList2(l1));


