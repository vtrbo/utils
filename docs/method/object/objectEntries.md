# ObjectEntries

## Description
严格类型的 `Object.entries`

## Run Online

<RunCode :language="ts" :dependency="`
function objectEntries<T extends object>(object: T): Array<[keyof T, T[keyof T]]> {
  return Object.entries(object) as Array<[keyof T, T[keyof T]]>
}`">

```ts
const object = {
  name: '@vtrbo/utils',
  age: 2,
  fnNum: 100,
  isPublish: true,
}

console.log(objectEntries(object))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| object | 源对象 | T | - |

</div>