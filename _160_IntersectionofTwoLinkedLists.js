/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 160. Intersection of Two Linked Lists
 * For example, the following two linked lists:

 A:          a1 → a2
                    ↘
                        c1 → c2 → c3
                    ↗
 B:     b1 → b2 → b3
 begin to intersect at node c1.

 time : O(n);
 space : O(1);
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function len(head) {
    let len = 1;
    while (head != null) {
        head = head.next;
        len++;
    }
    return len;
}
// Method 1
var getIntersectionNode = function(headA, headB) {
    if (headA == null || headB == null) return null;
    let lenA = len(headA);
    let lenB = len(headB);

    if (lenA > lenB) {
        while (lenA != lenB) {
            headA = headA.next;
            lenA--;
        }
    } else {
        while (lenA != lenB) {
            headB = headB.next;
            lenB--;
        }
    }

    while (headA != headB) {
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};

/**
 *
 A:          a1 → a2
                    ↘
                         c1 → c2 → c3
                    ↗
 B:     b1 → b2 → b3
 begin to intersect at node c1.

 A : a1 → a2 -> c1 → c2 → c3 -> b1 → b2 → b3 -> c1 → c2 → c3
 B : b1 → b2 → b3 -> c1 → c2 → c3 -> a1 → a2 -> c1 → c2 → c3

 time : O(m + n);
 space : O(1);

 * @param headA
 * @param headB
 * @return
 */
// Method 2

var getIntersectionNode = function(headA, headB) {
    if (headA == null || headB == null) return null;
    let a = headA;
    let b = headB;
    while (a != b) {
       a = a == null ? headB : a.next;
       b = b == null ? headA : b.next;
    }
    return a;
};

