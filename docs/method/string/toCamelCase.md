# ToCamelCase

## Description
转换成驼峰

## Run Online

<RunCode :dependency="`
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
const toCamelCase = (str: string, isUpper: boolean = false): string => {
  const camelCase = str.replace(/-([a-z])/g, key => key.toUpperCase())
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