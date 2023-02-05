'use strict'

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.


// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


// Constraints:

// 0 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
    const node = {
        left: 1,
        right: Math.floor(x / 2) + 1,
        mid: null
    }
    while (node.left <= node.right) {
        node.mid = Math.floor((node.left + node.right) / 2)
        
        if ((node.mid * node.mid) > x) {
            node.right = node.mid - 1
        }
        else if ((node.mid * node.mid) < x) {
            node.left = node.mid + 1
        }
        else {
            return node.mid
        }
    }
    return node.right
}

console.log('INPUT:', 144)
console.log('EXPECTED:', 12)
console.log('ACTUAL:', mySqrt(143))