# HasOwn

## Description
是否存在键

## Run Online

<RunCode :dependency="`
function hasOwn<T>(object: T, key: PropertyKey): boolean {
  if (object === null)
    return false
  return Object.prototype.hasOwnProperty.call(object, key)
}`">

```ts
const object = {
  name: '@vtrbo/utils',
  age: 2,
  fnNum: 100,
  isPublish: true,
}

console.log(hasOwn(object, 'name'))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| object | 源对象 | T | - |
| key | 键名 | PropertyKey | - |

</div>