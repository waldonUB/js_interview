// ### 第 113 题：编程题，根据以下要求，写一个数组去重函数（蘑菇街）

// > 1. 如传入的数组元素为`[123, "meili", "123", "mogu", 123]`，则输出：`[123, "meili", "123", "mogu"]`
// > 2. 如传入的数组元素为`[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]`，则输出：`[123, [1, 2, 3], [1, "2", 3], "meili"]`
// > 3. 如传入的数组元素为`[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]`，则输出：`[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]`

// 解析：[第 113 题](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/215)

function removeDu(arr) {
  const map = new Map()
  for (const item of arr) {
    // 如果不考虑循环引用的问题
    // 如果考虑的话，需要自己深度遍历把这个东西生成唯一的key
    map.set(JSON.stringify(item), item)
  }
  return map.values()
}

// console.log(removeDu([123, { a: 1 }, { a: { b: 1 } }, { a: '1' }, { a: { b: 1 } }, 'meili']))
console.log(
  removeDu([123, { a: undefined }, { a: { b: 1 } }, { a: null }, { a: { b: 1 } }, 'meili']),
)
