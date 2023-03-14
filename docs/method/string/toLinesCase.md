# ToLinesCase

## Description
转换成短横线或下划线连接

## Run Online

<RunCode symbolize="to-lines-case-b6VwTKom" :language="ts" :dependency="`
function toLinesCase(str: string, isUnder: boolean = false): string {
  return str
    .replace(/^[-|_]+|[-|_]+\$/g, '')
    .replace(/^[A-Z]/g, key => key.toLowerCase())
    .replace(/[A-Z]/g, key => \`\${isUnder ? '_' : '-'}\${key.toLowerCase()}\`)
}`">

```ts
const str: string = 'vtrboUtils'

console.log(toLinesCase(str))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| str | 字符串 | string | - |
| isUnder | 是否为下划线 true下划线 false短横线 | boolean | false |

</div>