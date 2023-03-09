# ToKebabCase

## Description
转换成短横线

## Run Online

<RunCode :dependency="`
function toKebabCase(str: string): string {
  return str.replace(/[A-Z]/g, key => \`-\${key.toLowerCase()}\`)
}`">

```ts
const str: string = 'vtrboUtils'

console.log(toKebabCase(str))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| str | 字符串 | string | - |

</div>