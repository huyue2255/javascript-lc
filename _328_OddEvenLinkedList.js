/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * T.C: O(N)
 * S.C: O(1)
 */


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var oddEvenList = function(head) {
    if (head == null) return head;
    let dummyHeadOdd = new ListNode();
    let dummyHeadEven = new ListNode();
    let curOdd = dummyHeadOdd;
    let curEven = dummyHeadEven;
    let cur = head;
    let idx = 1;

    while (cur != null) {
        if (idx % 2 === 1) {
            curOdd.next = cur;
            curOdd = curOdd.next;
        } else {
            curEven.next = cur;
            curEven = curEven.next;
        }
        cur = cur.next;
        idx++;
    }
    curOdd.next = dummyHeadEven.next;
    curEven.next = null;
    return dummyHeadOdd.next;
};

let l3 = new ListNode(3);
let l2 = new ListNode(2);
let l1 = new ListNode(1);
l1.next = l2;
l2.next = l3;
l3.next = null;

console.log(oddEvenList(l1))
