# NotNullish

## Description
非 nullish 值

## Run Online

<RunCode :language="ts" :dependency="`
function notNullish<T>(value: T | null | undefined): value is NonNullable<T> {
  return value != null
}`">

```ts
const array = ['@vtrbo/utils', null, 'null', undefined, 'undefined', 100, true, { name: 'Victor Bo' }, () => 'string']

console.log(array.filter(notNullish))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 欲校验的值 | T \| null \| undefined | - |

</div>