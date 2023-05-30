'use strict'

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (stairsCount) => {
    let prev = 0
    let next = 1
    let temp = prev
    for (let i = 0; i < stairsCount; i++) {
        temp = prev
        prev = next
        next += temp
    }
    return next
}

// console.log('INPUT:',n = 2 )
// console.log('EXPECTED:', 2)
console.log('ACTUAL:', climbStairs(2))
