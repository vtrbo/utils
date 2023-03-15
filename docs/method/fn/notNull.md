# NotNull

## Description
非 null 值

## Run Online

<RunCode :language="ts" :dependency="`
function notNull<T>(value: T | null): value is Exclude<T, null> {
  return value !== null
}`">

```ts
const data: null = null

console.log(notNull(data))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 欲校验的值 | T \| null | - |

</div>