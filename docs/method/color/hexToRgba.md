# HexToRgba

## Description
HEX 转 RGBA

## Run Online

<RunCode :dependency="`
const hexToRgba = (hex: string): number[] => {
  const lengthStrategy: {
    [key: number]: number[]
  } = {
    4: [parseInt(\`0x\${hex.slice(1, 2)}\${hex.slice(1, 2)}\`), parseInt(\`0x\${hex.slice(2, 3)}\${hex.slice(2, 3)}\`), parseInt(\`0x\${hex.slice(3, 4)}\${hex.slice(3, 4)}\`)],
    5: [parseInt(\`0x\${hex.slice(1, 2)}\${hex.slice(1, 2)}\`), parseInt(\`0x\${hex.slice(2, 3)}\${hex.slice(2, 3)}\`), parseInt(\`0x\${hex.slice(3, 4)}\${hex.slice(3, 4)}\`), Math.round(parseInt(\`0x\${hex.slice(4, 5)}\`) / 255 * 100) / 100],
    7: [parseInt(\`0x\${hex.slice(1, 3)}\`), parseInt(\`0x\${hex.slice(3, 5)}\`), parseInt(\`0x\${hex.slice(5, 7)}\`)],
    9: [parseInt(\`0x\${hex.slice(1, 3)}\`), parseInt(\`0x\${hex.slice(3, 5)}\`), parseInt(\`0x\${hex.slice(5, 7)}\`), Math.round(parseInt(\`0x\${hex.slice(7, 9)}\`) / 255 * 100) / 100],
  }
  return lengthStrategy[hex.length] || []
}`">

```ts
const hexColor: string = '#006688'

console.log(hexToRgba(hexColor))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| hex | 16进制颜色 | string | - |

</div>