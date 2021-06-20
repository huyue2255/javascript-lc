/**
 *  这个比较难以理解的是head == tail. 相较108 left > right, 暂时只有记住了
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function toBST(head, tail) {
    if (head == tail) return null;
    let slow = head;
    let fast = head;

    while (fast != tail && fast.next != tail) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let root = new TreeNode(slow.val);
    root.left = toBST(head, slow);
    root.right = toBST(slow.next, tail);
    return root
}


var sortedListToBST = function(head) {
    if (head == null) return null;
    return toBST(head, null);
};