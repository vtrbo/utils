# Entries

## Description
对象的 Entries

## Run Online

<RunCode :dependency="`
function entries<T extends object>(object: T): [keyof T, T[keyof T]][] {
  return Object.entries(object) as [keyof T, T[keyof T]][]
}`">

```ts
const object = {
  name: '@vtrbo/utils',
  age: 2,
  fnNum: 100,
  isPublish: true,
}

console.log(entries(object))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| object | 源对象 | T | - |

</div>