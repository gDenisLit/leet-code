'use strict'

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non - space characters only.



//     Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */
// const lengthOfLastWord = (str) => {
//     const lastWord = str.trim().split(' ')
//     return lastWord[lastWord.length - 1].length
// }

// const lengthOfLastWord = (str) => {
//     str = str.trim()
//     let lastWord = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         if (str[i] === ' ') break
//         lastWord += str[i]
//     }
//     return lastWord.length
// }

const lengthOfLastWord = (str) => {
    let isFirstChar = false
    let lastWord = ''
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== ' ') {
            lastWord += str[i]
            if (!isFirstChar) isFirstChar = true
        } else {
            if (isFirstChar) break
        }
    }
    return lastWord.length
}

console.log('INPUT:', "   fly me   to   the moon  ")
console.log('EXPECTED:', 4)
console.log('ACTUAL:', lengthOfLastWord("   fly me   to   the moon  "))