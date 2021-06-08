/**
 * input: 1->2->3->4
 * output: 1->
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function print(head) {
    while (head != null){
        console.log(head.val);
        head = head.next;
    }
}

function merge(one, two) {
    let dummy = new ListNode(0);
    let cur = dummy;
    while (one != null && two != null) {
        cur.next = one;
        one = one.next;
        cur.next.next = two;
        two = two.next;
        cur = cur.next.next;
    }

    if (one != null) {
        cur.next = one;
    } else if (two != null){
        cur.next = two;
    }
    return dummy.next;
}

function middleNode(head) {
    if (head == null || head.next == null) return head;
    let slow = head;
    let fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function reverseList (head) {
    if (head == null || head.next == null) return head;

    let pre = null;
    let cur = head;
    while (cur != null) {
        let nextNode = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextNode;
    }
    return pre;
};

var reorderLinkedList = function(head) {
    if (head == null || head.next == null) return head;
    let mid = middleNode(head);
    let one = head;
    let two = mid.next;
    mid.next = null;
    let new_head = reverseList(two);
    return merge(one,new_head);
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
l5.next = l6;
l6.next = null;

reorderLinkedList(l1);
print(l1);




