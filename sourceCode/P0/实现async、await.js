/**
 * 基于前面的测试用例实现一个简单版的
 * 本质上是generator + promise
 * 1. generator的done为false时，递归
 * 2. generator的done为true时，递归终止，resolve结果
 */
function asyncWrapper(generatorFn) {
  const g = generatorFn();
  return new Promise((resolve, reject) => {
    function autoNext(g, nextVal) {
      const { value, done } = g.next(nextVal);
      if (!done) {
        value.then((res) => {
          autoNext(g, res);
        });
      } else {
        resolve(value);
      }
    }
    autoNext(g);
  });
}

// 测试

const getData = () =>
  new Promise((resolve) => setTimeout(() => resolve("data"), 1000));

function* testG() {
  const data = yield getData();
  console.log("data: ", data);
  const data2 = yield getData();
  console.log("data2: ", data2);
  return "success";
}

asyncWrapper(testG).then((res) => {
  console.log(res);
});

// 期望顺序输出 data data2 success
