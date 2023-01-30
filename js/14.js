'use strict'

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = (strs) => {
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        const str = strs[i]
        let temp = ''
        for (let j = 0; j < prefix.length; j++) {
            if (prefix[j] !== str[j]) break
            temp += prefix[j]
        }
        prefix = temp
    }
    return prefix
}
// const longestCommonPrefix = (strs) => {
//     if (strs === undefined || strs.length === 0) return ''

//     return strs.reduce((prevStr, nextStr) => {
//         let i = 0
//         while (prevStr[i] && nextStr[i] && prevStr[i] === nextStr[i]) i++
//         return prevStr.slice(0, i)
//     })
// }

console.log('INPUT:', ["flower", "flow", "flight"])
console.log('EXPECTED:', "fl")
console.log('ACTUAL:', longestCommonPrefix(["flower", "flow", "flight"]))

console.log('INPUT:', ["dog", "racecar", "car"])
console.log('EXPECTED:', "")
console.log('ACTUAL:', longestCommonPrefix(["dog", "racecar", "car"]))