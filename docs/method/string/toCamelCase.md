# ToCamelCase

## Description
转换成大驼峰或小驼峰写法

## Run Online

<RunCode :language="ts" :dependency="`
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
function toCamelCase(str: string, isUpper: boolean = false): string {
  const camelCase = str
    .replace(/^[-|_]+|[-|_]+\$/g, '')
    .replace(/[-|_]+([a-z])/g, (_, key) => key.toUpperCase())
    .replace(/[-|_]+/g, '')
  return isUpper ? capitalize(camelCase) : camelCase
}`">

```ts
const str: string = 'vtrbo-utils-string'
const isUpper: boolean = true

console.log(toCamelCase(str, isUpper))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| str | 字符串 | string | - |
| isUpper | 是否为大驼峰 true大驼峰 false小驼峰 | boolean | false |

</div>