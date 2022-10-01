/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode.cn/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (45.06%)
 * Likes:    1734
 * Dislikes: 0
 * Total Accepted:    952.7K
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 请必须使用时间复杂度为 O(log n) 的算法。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1,3,5,6], target = 2
 * 输出: 1
 *
 *
 * 示例 3:
 *
 *
 * 输入: nums = [1,3,5,6], target = 7
 * 输出: 4
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums 为 无重复元素 的 升序 排列数组
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function (nums, target) {
//   if (target <= nums[0]) {
//     return 0
//   }
//   const l = nums.length
//   if (target > nums[l - 1]) {
//     return l
//   }
//   for (let i = 0; i < l; i++) {
//     const element = nums[i]
//     if (element === target) {
//       return i
//     }
//     if (element > target) {
//       return i
//     }
//   }
// }

/**2 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const l = nums.length
  let m = Math.floor(l / 2)
  let n = 0
  while (m >= 0 && m < l) {
    const element = nums[m]
    if (element === target) {
      return m
    }
    if (target < element) {
      const prev = m - 1
      if (prev < 0) {
        return 0
      }
      if (target === nums[prev]) {
        return prev
      }
      if (target > nums[prev]) {
        return m
      }
      m = n + Math.floor((m - n) / 2)
    }
    if (target > element) {
      const next = m + 1
      if (next > l - 1) {
        return next
      }
      if (target <= nums[next]) {
        return next
      }
      n = m
      m += Math.floor((l - m) / 2)
    }
  }
  return m
}
// @lc code=end
