/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode.cn/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (42.94%)
 * Likes:    2469
 * Dislikes: 0
 * Total Accepted:    943.5K
 * Total Submissions: 2.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 *
 *
 * 示例 2：
 *
 *
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * 1 取第一个字符串为基准  双层循环
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const first = strs[0]
  let result = ''
  for (let i = 0; i < first.length; i++) {
    const element = first[i]
    for (let j = 1; j < strs.length; j++) {
      if (element !== strs[j][i]) {
        return result
      }
    }
    result += element
  }
  return result
}
// @lc code=end
