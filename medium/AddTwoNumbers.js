/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, overflow = 0) {
    
    if (!l1 && !l2 && overflow === 0) {
        return null;
    }
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + overflow;

    const newVal = sum % 10;
    const newOverflow = Math.floor(sum / 10);

    const nextL1 = l1 ? l1.next : null;
    const nextL2 = l2 ? l2.next : null;

    return new ListNode(newVal, addTwoNumbers(nextL1, nextL2, newOverflow));
};