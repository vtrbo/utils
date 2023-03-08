# IsKeyOf

## Description
确定对象是否具有具名的键，旨在约束 in 操作符中的键类型

## Run Online

<RunCode :dependency="`
function isKeyOf<T extends object>(object: T, key: keyof any): key is keyof T {
  return key in object
}`">

```ts
const object = {
  name: '@vtrbo/utils',
  age: 2,
  fnNum: 100,
  isPublish: true,
}

console.log(isKeyOf(object, 'name'))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| object | 源对象 | T | - |
| key | 键名 | keyof any | - |

</div>