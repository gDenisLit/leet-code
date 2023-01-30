'use strict'

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

const isValid = (str) => {
    const parMap = { '(': ')', '{': '}', '[': ']' }
    let res = ''
    for (let i = 0; i < str.length; i++) {
        if (parMap[str[i]]) {
            res += str[i]
            continue
        }
        else {
            const closePar = parMap[res[res.length - 1]]
            if (str[i] !== closePar) return false
            res = res.slice(0, res.length - 1)
        }
    }
    return (res.length) ? false : true
}

console.log('INPUT:', '()')
console.log('EXPECTED:', true)
console.log('ACTUAL:', isValid('()'))

console.log('INPUT:', '([{}])')
console.log('EXPECTED:', true)
console.log('ACTUAL:', isValid('([{}])'))

console.log('INPUT:', '(]')
console.log('EXPECTED:', false)
console.log('ACTUAL:', isValid('(]'))