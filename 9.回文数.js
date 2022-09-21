/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode.cn/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.87%)
 * Likes:    2210
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2M
 * Testcase Example:  '121'
 *
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 *
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 *
 * 例如，121 是回文，而 123 不是。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 121
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = -121
 * 输出：false
 * 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 *
 * 示例 3：
 *
 *
 * 输入：x = 10
 * 输出：false
 * 解释：从右向左读, 为 01 。因此它不是一个回文数。
 *
 *
 *
 *
 * 提示：
 *
 *
 * -2^31 <= x <= 2^31 - 1
 *
 *
 *
 *
 * 进阶：你能不将整数转为字符串来解决这个问题吗？
 *
 */

// @lc code=start
// /**
//  * 1 转化为字符串 i 和 n-i-1 比较
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {
//   const str = x.toString()
//   const l = Math.floor(str.length / 2)
//   for (let i = 0; i < l; i++) {
//     const f = str[i]
//     const e = str[str.length - i - 1]
//     if (f !== e) {
//       return false
//     }
//   }
//   return true
// }

/**
 * 2 不断除以10，用余数拼接回原数
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  let a = x
  let r = 0
  do {
    r = r * 10 + (a % 10)
    a = Math.floor(a / 10)
  } while (a > 0)
  return x === r
}
// @lc code=end
