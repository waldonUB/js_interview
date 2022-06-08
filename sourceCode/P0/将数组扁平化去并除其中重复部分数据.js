var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
function getArr(arr) {
  const set = new Set();
  function getChildren(_arr) {
    for (const item of _arr) {
      if (Array.isArray(item)) {
        if (item.length) {
          getChildren(item);
        }
      } else {
        set.add(item);
      }
    }
  }
  getChildren(arr);
  return [...set].sort((a, b) => a - b);
}
console.log(`getArr(arr)`, getArr(arr));
