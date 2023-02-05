'use strict'

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.



// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]


// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

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
const deleteDuplicates = (list) => {
    if (list === null) return null
    const newList = list

    let tempNew = newList
    let tempOld = list

    while (tempOld !== null) {
        debugger
        if (tempOld.val === tempNew.val) {
            tempOld = tempOld.next
        }
        else if (tempOld.val > tempNew.val) {
            tempNew.next = tempOld
            tempNew = tempNew.next
            tempOld = tempOld.next
        }
    }
    tempNew.next = null
    return newList
}

const list = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: null
                }
            }
        }
    }
}

console.log('Input', JSON.stringify(list))
console.log('output', JSON.stringify(deleteDuplicates(list)))