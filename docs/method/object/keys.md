# Keys

## Description
对象的 Keys

## Run Online

<RunCode :dependency="`
function keys<T extends object>(object: T): (keyof T)[] {
  return Object.keys(object) as (keyof T)[]
}`">

```ts
const object = {
  name: '@vtrbo/utils',
  age: 2,
  fnNum: 100,
  isPublish: true,
}

console.log(keys(object))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| object | 源对象 | T | - |

</div>