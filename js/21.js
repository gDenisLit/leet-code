'use strict'

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// const mergeTwoLists = (arr1, arr2) => {
//     let res = []
//     for (let i = 0; i < arr1.length && arr1[i] && arr2[i]; i++) {
//         res.push(...[arr1[i], arr2[i]])
//     }
//     return res
// }

const list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}

const list2 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}

const mergeTwoLists = (list1, list2) => {
    const mergedList = { val: 0, next: null }
    let temp = mergedList

    while (list1 && list2) {
        if (list1.val > list2.val) {
            temp.next = list2
            list2 = list2.next
        } else {
            temp.next = list1
            list1 = list1.next
        }
        temp = temp.next
    }
    temp.next = list1 || list2
    return mergedList.next
}

console.log('INPUT:', [1, 8, 12, 22, 45], [4, 6, 9, 11])
console.log('EXPECTED:', [1, 1, 2, 3, 4, 4])
console.log('ACTUAL:', mergeTwoLists(list1, list2))
