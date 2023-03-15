# NotFalsy

## Description
非 falsy 值

## Run Online

<RunCode :language="ts" :dependency="`
function notFalsy<T>(value: T): value is NonNullable<T> {
  return Boolean(value)
}`">

```ts
const data: null = null

console.log(notFalsy(data))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 欲校验的值 | T | - |

</div>