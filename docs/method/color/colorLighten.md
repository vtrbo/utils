# ColorLighten

## Description
变浅颜色

## Run Online

<RunCode :dependency="`
const toRawType = (data: any): string => Object.prototype.toString.call(data).slice(8, -1)
const isType = (data: any, type: string): boolean => toRawType(data).toLowerCase() === type.toLowerCase()
const isString = (data: any): boolean => isType(data, 'String')
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
}
const rgbaToHex = (rgba: number[]): string => {
  const [r, g, b, a] = rgba
  if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255)
    return \`#\${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}\${(a || a === 0) ? (a * 255 | 1 << 8).toString(16).slice(1) : ''}\`
  return ''
}
function colorLighten(color: string | number[], level: number = 10, type: 'HEX' | 'RGBA' = 'HEX'): string | number[] {
  let rgba: number[] = color as number[]
  if (isString(color))
    rgba = hexToRgba(color as string)
  for (let i = 0; i < 3; i++) rgba[i] = Math.floor((255 - rgba[i]) * level / 10 + rgba[i])
  return type === 'HEX' ? rgbaToHex(rgba) : rgba
}`">

```ts
const hexColor: string = '#006688'

console.log('HEX类型颜色减淡个层级输出HEX类型', colorLighten(hexColor, 5, 'HEX'))
console.log('HEX类型颜色减淡5个层级输出RGBA类型', colorLighten(hexColor, 5, 'RGBA'))

const rgbaColor: number[] = [128, 255, 76, 0.4]

console.log('RGBA类型颜色减淡5个层级输出HEX类型', colorLighten(rgbaColor, 5, 'HEX'))
console.log('RGBA类型颜色减淡5个层级输出RGBA类型', colorLighten(rgbaColor, 5, 'RGBA'))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 16进制颜色 | RGBA颜色 | string \| number[] | - |
| level | 变浅权重 0 自身 10 白色 | number | 0 |
| type | 返回类型 | 'HEX' \| 'RGBA' | 'HEX' |

</div>