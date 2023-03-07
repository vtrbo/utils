# ToSlash

## Description
替换 \ 为 /

## Run Online

<RunCode :dependency="`
function toSlash(str: string): string {
  return str.replace(/\\/g, '/')
}`">

```ts
const filePath: string = '\src\string/toSlash'

console.log(toSlash(filePath))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| str | 字符串 | string | - |

</div>