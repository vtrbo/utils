# Darken

## Description
加深颜色

## Run Online

<RunCode :language="ts" :dependency="`
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
}
const rgbaToHex = (rgba: string): string => {
  if (!isColor(rgba, 'RGB') && !isColor(rgba, 'RGBA'))
    return ''
  const rgbaValue = rgba.replace('rgba(', '').replace('rgb(', '').replace(')', '')
  const [r, g, b, a] = rgbaValue.split(',').map(m => +m)
  if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255)
    return \`#\${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}\${(a || a === 0) ? (a * 255 | 1 << 8).toString(16).slice(1) : ''}\`
  return ''
}
function darken(color: string, level: number = 0): string {
  if (!isColor(color, 'HEX') && !isColor(color, 'RGB') && !isColor(color, 'RGBA'))
    return ''
  let rgbaColor: string = ''
  let rgba: number[] = []
  let type: 'HEX' | 'RGB' | 'RGBA' = 'RGBA'
  if (isColor(color, 'HEX')) {
    rgbaColor = hexToRgba(color)
    type = 'HEX'
  }
  else {
    rgbaColor = color
    type = isColor(color, 'RGBA') ? 'RGBA' : 'RGB'
  }
  const rgbaValue = rgbaColor.replace('rgba(', '').replace('rgb(', '').replace(')', '')
  rgba = rgbaValue.split(',').map(m => +m)
  for (let i = 0; i < 3; i++) rgba[i] = Math.floor(rgba[i] * (10 - level) / 10)
  const typeMap = {
    HEX: '',
    RGB: \`rgb(\${rgba.join(', ')})\`,
    RGBA: \`rgba(\${rgba.join(', ')})\`,
  }
  const darkenColor = typeMap[type]
  return darkenColor || rgbaToHex(darkenColor)
}`">

```ts
const color: string = 'rgba(128, 56, 32, 0.8)'
const level: number = 5

console.log(darken(color, level))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 颜色 | string | - |
| level | 加深权重 0 自身 10 黑色 | number | 0 |

</div>