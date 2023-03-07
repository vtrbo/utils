# RgbaToHex

## Description
RGBA 转 HEX

## Run Online

<RunCode :dependency="`
const rgbaToHex = (rgba: number[]): string => {
  const [r, g, b, a] = rgba
  if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255)
    return \`#\${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}\${(a || a === 0) ? (a * 255 | 1 << 8).toString(16).slice(1) : ''}\`
  return ''
}`">

```ts
const rgbaColor: number[] = [128, 255, 76, 0.4]

console.log(rgbaToHex(rgbaColor))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rgba | RGBA颜色 | number[] | - |

</div>