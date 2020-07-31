/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head,pos) {

    while(head) {
        if(head.val == "check"){
            return true;
        }
        head.val = "check";
        head = head.next;
    }
    return false
};