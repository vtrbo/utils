# HasOwnProperty

## Description
确定对象是否具有具名的键

## Run Online

<RunCode symbolize="has-own-property-yKH2jBwP" :language="ts" :dependency="`
function hasOwnProperty<T>(object: T, key: PropertyKey): boolean {
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

console.log(hasOwnProperty(object, 'name'))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| object | 源对象 | T | - |
| key | 键名 | PropertyKey | - |

</div>