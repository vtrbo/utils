# EnsurePrefix

## Description
确保字符串前缀

## Run Online

<RunCode :language="ts" :dependency="`
function ensurePrefix(str: string, prefix: string): string {
  if (!str.startsWith(prefix))
    return prefix + str
  return str
}`">

```ts
const filePath: string = '/string/ensurePrefix'
const prefix: string = '/src'

console.log(ensurePrefix(filePath, prefix))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| str | 字符串 | string | - |
| prefix | 前缀 | string | - |

</div>