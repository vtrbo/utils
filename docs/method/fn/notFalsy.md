# NotFalsy

## Description
非 falsy 值

## Run Online

<RunCode :dependency="`
function notFalsy<T>(value: T): value is NonNullable<T> {
  return Boolean(value)
}`">

```ts
const array = ['@vtrbo/utils', null, 'null', undefined, 'undefined', 100, true, { name: 'Victor Bo' }, () => 'string']

console.log(array.filter(notFalsy))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 欲校验的值 | T | - |

</div>