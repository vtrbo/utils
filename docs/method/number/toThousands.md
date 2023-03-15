# ToThousands

## Description
增加千分位分割符

## Run Online

<RunCode :language="ts" :dependency="`
function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}
function isType(data: any, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}
function isUndefined(data: any): data is undefined {
  return isType(data, 'Undefined')
}
function isNumber(data: any): data is number {
  return isType(data, 'Number')
}
function isString(data: any): data is string {
  return isType(data, 'String')
}
function toThousands(
  data: any,
  decimal?: number,
  zeroize?: boolean,
): string {
  if (isNaN(data) || (!isString(data) && !isNumber(data)) || (!data && data !== 0))
    return ''
  let tData: string | number = +data
  if (isNaN(tData))
    return ''
  if (!isUndefined(decimal)) {
    decimal = Math.floor(decimal)
    tData = zeroize ? tData.toFixed(decimal) : +tData.toFixed(decimal)
  }
  const tDataArr = (\`\${tData}\`).split('.')
  if (tDataArr.length > 2)
    return ''
  tData = (\`\${+tDataArr[0]}\`).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',') + (tDataArr[1] ? \`.\${tDataArr[1]}\` : '')
  return tData
}`">

```ts
const data: number = 123456.789
const decimal: number = 2
const zeroize: boolean = true

console.log(toThousands(data, decimal, zeroize))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 欲加千分位的数据 | any | - |
| decimal | 保留小数位数 undefined不处理小数位数 | number | undefined |
| zeroize | 是否用零补位，只有开启了 `decimal` 才生效 true补位 false不补 | boolean | false |

</div>