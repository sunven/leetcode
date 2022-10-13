/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode.cn/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (53.97%)
 * Likes:    2686
 * Dislikes: 0
 * Total Accepted:    978.7K
 * Total Submissions: 1.8M
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 *
 * 示例 2：
 *
 *
 * 输入：n = 3
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶 + 1 阶
 * 2. 1 阶 + 2 阶
 * 3. 2 阶 + 1 阶
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 45
 *
 *
 */

// @lc code=start
// /**
//  * 1 常规递归思路，需优化
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//   if (n === 1) {
//     return 1
//   }
//   if (n === 2) {
//     return 2
//   }
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }

// /**
//  * 2 递归 利用map缓存
//  * @param {number} n
//  * @return {number}
//  */
// const map = []
// var climbStairs = function (n) {
//   const r = map[n]
//   if (r) {
//     return r
//   }
//   if (n === 1) {
//     map[1] = 1
//     return 1
//   }
//   if (n === 2) {
//     map[2] = 2
//     return 2
//   }
//   const n1 = climbStairs(n - 1)
//   map[n - 1] = n1
//   const n2 = climbStairs(n - 2)
//   map[n - 2] = n2
//   map[n] = n1 + n2
//   return n1 + n2
// }

// /**
//  * 3 缓存前两个
//  * @param {number} n
//  * @return {number}
//  */

// var climbStairs = function (n) {
//   let a = 0,
//     b = 1,
//     c = 0
//   for (let i = 1; i <= n; i++) {
//     c = a + b
//     a = b
//     b = c
//   }
//   return c
// }

/**
 * 4 斐波那契数列的公式
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const sqrt_5 = Math.sqrt(5)
  const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1)
  return Math.round(fib_n / sqrt_5)
}
// @lc code=end
