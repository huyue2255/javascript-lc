/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * For example:
 Given 1->2->3->4->5->NULL, m = 2 and n = 4,

 return 1->4->3->2->5->NULL.

 1->2->3->4->5
 p  c  t
 视频解释： https://www.youtube.com/watch?v=wk8-_M-2fzI

 time : O(n);
 space : O(1);
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const reverseBetween = (head, left, right) => {
    const dummy = new ListNode(0);
    dummy.next = head;

    let pre = dummy;
    let cur = head;
    for (let i = 1; i < left; i++) {
        pre = pre.next;
        cur = cur.next;
    }

    for (let i = 0; i < right - left; i++) {
        let temp = cur.next;
        cur.next = temp.next;
        temp.next = pre.next;
        pre.next = temp;
    }
    return dummy.next;
};
// let l5 = new ListNode(5);
let l4 = new ListNode(4);
let l3 = new ListNode(3);
let l2 = new ListNode(2);
let l1 = new ListNode(1);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = null;


// console.log(l1)

console.log(reverseBetween(l1,1,2))