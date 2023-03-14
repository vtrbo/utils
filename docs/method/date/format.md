# Format

## Description
格式化时间

## Run Online

<RunCode symbolize="format-kFqRcSxo" :language="ts" :dependency="`
function format(date: Date, pattern: string): string {
  const dateTime = new Date(date)
  const format = {
    YYYY: dateTime.getFullYear(),
    [pattern.includes('MM') ? 'MM' : 'M']: dateTime.getMonth() + 1,
    [pattern.includes('DD') ? 'DD' : 'D']: dateTime.getDate(),
    [pattern.includes('HH') ? 'HH' : 'H']: dateTime.getHours(),
    [pattern.includes('mm') ? 'mm' : 'm']: dateTime.getMinutes(),
    [pattern.includes('ss') ? 'ss' : 's']: dateTime.getSeconds(),
    W: dateTime.getDay(),
  }
  return pattern.replace(/YYYY|M+|D+|H+|m+|s+|W+/g, (key: string): string => {
    const value = format[key]
    if (key === 'W')
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    if (key.length === 2 && value < 10)
      return \`0\${value}\`
    return \`\${value}\`
  })
}`">

```ts
const date = new Date('2022/2/22')
const pattern = 'DD/MM YYYY'

console.log(format(date, pattern))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| date | 日期时间 | Date | - |
| pattern | 格式 Y年 M月 D日 H时 m分 s秒 W周 | string | - |

</div>