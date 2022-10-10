/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode.cn/problems/add-binary/description/
 *
 * algorithms
 * Easy (53.59%)
 * Likes:    891
 * Dislikes: 0
 * Total Accepted:    281.6K
 * Total Submissions: 525.9K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入:a = "11", b = "1"
 * 输出："100"
 *
 * 示例 2：
 *
 *
 * 输入：a = "1010", b = "1011"
 * 输出："10101"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= a.length, b.length <= 10^4
 * a 和 b 仅由字符 '0' 或 '1' 组成
 * 字符串如果不是 "0" ，就不含前导零
 *
 *
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const al = a.length
  const bl = b.length
  const l = al > bl ? al : bl
  let i = 0
  let str = ''
  let s = 0
  while (i < l) {
    const a1 = a[al - 1 - i] || 0
    const b1 = b[bl - 1 - i] || 0
    const sum = +a1 + +b1 + s
    if (sum > 1) {
      str = (sum > 2 ? '1' : '0') + str
      s = 1
    } else {
      s = 0
      str = sum + str
    }
    i++
  }
  return (s === 1 ? '1' : '') + str
}
// @lc code=end
