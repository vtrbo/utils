# Capitalize

## Description
首字母大写

## Run Online

<RunCode :language="ts" :dependency="`
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}`">

```ts
const str: string = 'hello! @vtrbo/utils'

console.log(capitalize(str))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| str | 字符串 | string | - |

</div>