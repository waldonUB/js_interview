/**
 * 按部就班版的new
 * 1. 创建一个新对象
 * 2. 将新对象的原型设置为构造函数的 prototype 属性
 * 3. 执行构造函数，将 this 指向该原型对象
 * 4. 返回这个新对象
 */
const MyNew_1 = function (Fn, ...args) {
  const obj = {};
  obj.__proto__ = Fn.prototype; // 优化：Object.setPrototypeOf(obj, Fn.prototype)
  const res = Fn.apply(obj, args);
  // 优化：type：function && res !== null
  if (typeof res === "object") {
    return res;
  }
  return obj;
};

const Foo = function () {
  this.c = 3;
  // return {
  //   a: 1,
  // }
};
Foo.prototype.b = 2;

// const foo1 = new Foo()
// console.log(`foo1`, foo1)
// console.log(`foo1.b`, foo1.b)
// console.log(`foo1.c`, foo1.c)

// const foo3 = newOperator(Foo)
// console.log(`foo3`, foo3)
