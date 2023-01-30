// Given two binary strings a and b, return their sum as a binary string.



// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// binary rules 
// 0 + 0 = 0
// 0 + 1 = 1
// 1 + 0 = 1
// 1 + 1 = 0, carry over the 1, i.e. 10

// const addBinary = (a, b) => {
//     const length = a.length > b.length ? a.length : b.length
//     let sum = ''
//     let carry = 0
//     for (let i = length - 1; i >= 0; i--) {
//         // debugger
//         const num1 = parseInt(a[i]) || 0
//         const num2 = parseInt(b[i]) || 0

//         const res = num1 + num2 + carry
//         switch (res) {
//             case 0: {
//                 sum = 0 + sum
//                 carry = 0
//                 break
//             }
//             case 1: {
//                 sum = 1 + sum
//                 carry = 0
//                 break
//             }
//             case 2: {
//                 sum = 0 + sum
//                 carry = 1
//                 break
//             }
//             default: {
//                 sum = 1 + sum
//                 carry = 1
//             }
//         }
//     }
//     sum = carry ? carry + sum : sum
//     return sum
// }

const addBinary = (a, b) => {
    let sum = ''
    let carry = 0
    let i = a.length - 1
    let j = b.length - 1

    while (i >= 0 || j >= 0 || carry) {
        let num1 = i >= 0 ? parseInt(a[i--]) : 0
        let num2 = j >= 0 ? parseInt(b[j--]) : 0
        let res = num1 + num2 + carry
        sum = (res % 2) + sum
        carry = Math.floor(res / 2)
    }
    return sum
}

console.log('INPUT:', "1111", "1101")
console.log('EXPECTED:', "11100")
console.log('ACTUAL:', addBinary("1111", "1101"))