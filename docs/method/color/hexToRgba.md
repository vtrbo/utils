# HexToRgba

## Description
HEX 转 RGBA

## Run Online

<RunCode :dependency="`
function isColor(color: string, type: 'HEX' | 'RGB' | 'RGBA'): boolean {
  const typeMap = {
    HEX: /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\$/g,
    RGB: /^[rR][gG][bB][\\(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,[\\s]*){2}([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*){1}[\\)]\$/g,
    RGBA: /^[rR][gG][bB][aA][\\(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,[\\s]*){3}[\\s]*(1|1.0|0|0.[0-9])[\\s]*[\\)]{1}\$/g,
  }
  return typeMap[type].test(color)
}
const hexToRgba = (hex: string): string => {
  if (!isColor(hex, 'HEX'))
    return ''
  const getSingle = (start: number, end: number) => parseInt(\`0x\${hex.slice(start, end)}\${hex.slice(start, end)}\`)
  const getDouble = (start: number, end: number) => parseInt(\`0x\${hex.slice(start, end)}\`)
  const hexMap: {
    [key: number]: string
  } = {
    4: \`rgb(\${getSingle(1, 2)}, \${getSingle(2, 3)}, \${getSingle(3, 4)})\`,
    5: \`rgba(\${getSingle(1, 2)}, \${getSingle(2, 3)}, \${getSingle(3, 4)}, \${Math.round(getDouble(4, 5) / 255 * 100) / 100})\`,
    7: \`rgb(\${getDouble(1, 3)}, \${getDouble(3, 5)}, \${getDouble(5, 7)})\`,
    9: \`rgba(\${getDouble(1, 3)}, \${getDouble(3, 5)}, \${getDouble(5, 7)}, \${Math.round(getDouble(7, 9) / 255 * 100) / 100})\`,
  }
  return hexMap[hex.length] || ''
}`">

```ts
const hex: string = '#438275'

console.log(hexToRgba(hex))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| hex | 16进制颜色 | string | - |

</div>