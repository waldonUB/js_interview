// JS实现一个带并发限制的异步调度器Scheduler，
// 保证同时运行的任务最多有两个。
// 完善代码中Scheduler类，
// 使得以下程序能正确输出

/*
1. this.run.length >= this.count
  - 返回一个Promise.race的promise，在then函数中执行递归的调用逻辑
2. this.run.length < this.count
  - 直接运行，返回一个promise，在then函数中去处理完成的情况
  - 完成时从this.run的队列中剔除

*/
class Scheduler {
  constructor() {
    this.count = 2
    this.queue = []
    this.run = []
  }

  add(task) {
    this.queue.push(task)
    return this.next()
  }
  next() {
    if (this.run.length < this.count) {
      const task = this.queue.shift()
      const promise = task().then(() => {
        // this.run.splice(this.run.indexOf(promise), 1)
        this.run = this.run.filter((item) => item !== promise)
      })
      this.run.push(promise)
      return promise
    } else {
      return Promise.race(this.run).then(() => this.next())
    }
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(3000, '1')
addTask(500, '2')
addTask(3000, '3')
addTask(400, '4')

// output: 2 3 1 4

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
