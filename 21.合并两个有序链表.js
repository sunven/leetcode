/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (66.71%)
 * Likes:    2690
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 *
 *
 * 示例 2：
 *
 *
 * 输入：l1 = [], l2 = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 两个链表的节点数目范围是 [0, 50]
 * -100
 * l1 和 l2 均按 非递减顺序 排列
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /** 1 特点: 不改变原链表
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function (list1, list2) {
//   const arr = []
//   while (list1 || list2) {
//     const node = new ListNode()
//     let value = 0
//     if (!list1) {
//       value = list2.val
//       list2 = list2.next
//     } else if (!list2) {
//       value = list1.val
//       list1 = list1.next
//     } else if (list1.val < list2.val) {
//       value = list1.val
//       list1 = list1.next
//     } else {
//       value = list2.val
//       list2 = list2.next
//     }
//     node.val = value
//     arr.push(node)
//   }
//   if (arr.length < 1) {
//     return null
//   }
//   let first = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     first.next = arr[i]
//     first = first.next
//   }
//   return arr[0]
// }
// /** 2 递归 改变了原链表
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function (list1, list2) {
//   if (!list1) {
//     return list2
//   } else if (!list2) {
//     return list1
//   } else if (list1.val < list2.val) {
//     list1.next = mergeTwoLists(list1.next, list2)
//     return list1
//   } else {
//     list2.next = mergeTwoLists(list1, list2.next)
//     return list2
//   }
// }

/** 3 迭代 改变了原链表
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const prev = new ListNode()
  let node = prev
  while (list1 || list2) {
    if (!list1) {
      node.next = list2
      list2 = list2.next
    } else if (!list2) {
      node.next = list1
      list1 = list1.next
    } else if (list1.val < list2.val) {
      node.next = list1
      list1 = list1.next
    } else {
      node.next = list2
      list2 = list2.next
    }
    node = node.next
  }
  // node.next = list1
  return prev.next
}

// @lc code=end
