# Once

## Description
只执行一次的函数

## Run Online

<RunCode :language="ts" :dependency="`
function once<A extends any[], R, T>(
  fn: (this: T, ...arg: A) => R,
): ((this: T, ...arg: A) => R | undefined) {
  let done: boolean = false
  return function (this: T, ...args: A) {
    return done ? undefined : ((done = true), fn.apply(this, args))
  }
}`">

```ts
let count: number = 0
const func = () => {
  count += 1
  return count
}
const onceFunc = once(func)

console.log(onceFunc())
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fn | 欲执行的函数 | (this: T, ...arg: A) => R | - |

</div>