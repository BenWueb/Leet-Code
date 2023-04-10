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
 */
var deleteDuplicates = function (head) {
  let currNode = head;

  while (currNode) {
    while (currNode.val === currNode.next?.val) {
      currNode.next = currNode.next.next;
    }

    currNode = currNode.next;
  }

  return head;
};
