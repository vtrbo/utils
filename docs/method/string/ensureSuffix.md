# EnsureSuffix

## Description
确保字符串后缀

## Run Online

<RunCode :language="ts" :dependency="`
function ensureSuffix(str: string, suffix: string): string {
  if (!str.endsWith(suffix))
    return str + suffix
  return str
}`">

```ts
const filePath: string = '/string/ensureSuffix'
const suffix: string = '/src'

console.log(ensureSuffix(filePath, suffix))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| str | 字符串 | string | - |
| suffix | 后缀 | string | - |

</div>