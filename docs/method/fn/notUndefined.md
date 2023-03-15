# NotUndefined

## Description
非 undefined 值

## Run Online

<RunCode :language="ts" :dependency="`
function notUndefined<T>(value: T): value is Exclude<T, undefined> {
  return value !== undefined
}`">

```ts
const data: null = null

console.log(notUndefined(data))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 欲校验的值 | T | - |

</div>