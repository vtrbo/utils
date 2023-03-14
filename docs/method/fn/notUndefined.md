# NotUndefined

## Description
非 undefined 值

## Run Online

<RunCode symbolize="not-undefined-G3NxI1tY" :language="ts" :dependency="`
function notUndefined<T>(value: T): value is Exclude<T, undefined> {
  return value !== undefined
}`">

```ts
const array = ['@vtrbo/utils', null, 'null', undefined, 'undefined', 100, true, { name: 'Victor Bo' }, () => 'string']

console.log(array.filter(notUndefined))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 欲校验的值 | T | - |

</div>