# RgbaToHex

## Description
RGBA 转 HEX

## Run Online

<RunCode symbolize="rgba-to-hex-UV7x3G6h" :language="ts" :dependency="`
function isColor(color: string, type: 'HEX' | 'RGB' | 'RGBA'): boolean {
  const typeMap = {
    HEX: /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\$/g,
    RGB: /^[rR][gG][bB][\\(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,[\\s]*){2}([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*){1}[\\)]\$/g,
    RGBA: /^[rR][gG][bB][aA][\\(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,[\\s]*){3}[\\s]*(1|1.0|0|0.[0-9])[\\s]*[\\)]{1}\$/g,
  }
  return typeMap[type].test(color)
}
const rgbaToHex = (rgba: string): string => {
  if (!isColor(rgba, 'RGB') && !isColor(rgba, 'RGBA'))
    return ''
  const rgbaValue = rgba.replace('rgba(', '').replace('rgb(', '').replace(')', '')
  const [r, g, b, a] = rgbaValue.split(',').map(m => +m)
  if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255)
    return \`#\${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}\${(a || a === 0) ? (a * 255 | 1 << 8).toString(16).slice(1) : ''}\`
  return ''
}`">

```ts
const rgba: string = 'rgba(128, 99, 36, 0.6)'

console.log(rgbaToHex(rgba))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rgba | RGBA 颜色 | string | - |

</div>