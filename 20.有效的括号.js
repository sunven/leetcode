/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (44.60%)
 * Likes:    3512
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.8M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "()"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "()[]{}"
 * 输出：true
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "(]"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^4
 * s 仅由括号 '()[]{}' 组成
 *
 *
 */

// @lc code=start
// /**
//  * 1 堆栈思路
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//   const map = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//   }
//   const left = ['(', '[', '{']
//   const right = [')', ']', '}']
//   const arr1 = []
//   for (let i = 0; i < s.length; i++) {
//     const element = s[i]
//     if (left.includes(element)) {
//       arr1.push(element)
//     } else if (right.includes(element)) {
//       if (map[arr1[arr1.length - 1]] !== element) {
//         return false
//       }
//       arr1.pop()
//     }
//   }
//   return arr1.length === 0
// }
/**
 * 2 replace逐个替换
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = ['()', '[]', '{}']
  while (true && s) {
    let a = ''
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]
      a = s.replace(element, '')
      if (a !== s) {
        break
      }
    }
    if (a === s) {
      return false
    }
    s = a
  }
  return true
}
// @lc code=end
