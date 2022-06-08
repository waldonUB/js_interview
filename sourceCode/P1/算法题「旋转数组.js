// > 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 示例 1：
// ```js
// 输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
// 输出: [5, 6, 7, 1, 2, 3, 4]
// 解释:
// 向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
// 向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
// 向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
// ```
// 示例 2：
// ```js
// 输入: [-1, -100, 3, 99] 和 k = 2
// 输出: [3, 99, -1, -100]
// 解释:
// 向右旋转 1 步: [99, -1, -100, 3]
// 向右旋转 2 步: [3, 99, -1, -100]
// ```
// 解析：[第 77 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/126)

function getArr(arr, k) {
  const res = new Array(arr.length)
  for (let i = 0; i < arr.length; i++) {
    let index = (i + k) % arr.length
    res[index] = arr[i]
  }
  return res
}

/**
 * 解法2
 * @author waldon
 * @date 2022-05-26
 * @param {*} arr - param
 * @param {*} k - param
 */
function rotateArr(arr, k) {
  // k大于arr的长度时应取模
  while (k > 0) {
    const item = arr.pop()
    arr.unshift(item)
    k--
  }
  return arr
}

console.log(getArr([1, 2, 3, 4, 5, 6, 7], 3))
