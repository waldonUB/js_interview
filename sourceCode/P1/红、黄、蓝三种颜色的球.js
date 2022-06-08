// ### 第 135 题：算法题（盛大）

// > 在一个字符串数组中有红、黄、蓝三种颜色的球，且个数不相等、顺序不一致，请为该数组排序。使得排序后数组中球的顺序为:黄、红、蓝。
// >
// > 例如：红蓝蓝黄红黄蓝红红黄红，排序后为：黄黄黄红红红红红蓝蓝蓝。

// 解析：[第 135 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/266)

function sortBall(str) {
  const arr = str.split('')
  const res = []
  const last = []
  for (const item of arr) {
    if (item === '黄') {
      res.unshift(item)
    } else if (item === '红') {
      res.push(item)
    } else {
      last.push(item)
    }
  }
  return res.concat(last).join('')
}
console.log(sortBall('红蓝蓝黄红黄蓝红红黄红'))

// 解法二：给每个item手动定义个sort的优先级，比如{name: '红', value: 2}
