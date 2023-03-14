# RandomColor

## Description
生成随机颜色

## Run Online

<RunCode :language="ts" :dependency="`
function randomColor(type: 'HEX' | 'RGBA' = 'HEX'): string {
  const typeMap = {
    HEX: \`#\${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(8, '0')}\`,
    RGBA: \`rgba(\${Math.floor(Math.random() * 255)}, \${Math.floor(Math.random() * 255)}, \${Math.floor(Math.random() * 255)}, \${Math.floor(Math.random() * 100) / 100})\`,
  }
  return typeMap[type]
}`">

```ts
const type: 'RGBA' | 'HEX' = 'RGBA'

console.log(randomColor(type))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 颜色类型 | 'HEX' \| 'RGBA' | 'HEX' |

</div>