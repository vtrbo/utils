# Once

## Description
一次函数

## Run Online

<RunCode :dependency="`
function once<A extends any[], R, T>(
  fn: (this: T, ...arg: A) => R,
): ((this: T, ...arg: A) => R | undefined) {
  let done = false
  return function (this: T, ...args: A) {
    return done ? undefined : ((done = true), fn.apply(this, args))
  }
}`">

```ts
const func = (num: number) => {
  return num++
}

const onceFunc = once(func)

console.log(onceFunc((6)))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fn | 欲执行的函数 | (this: T, ...arg: A) => R | - |

</div>