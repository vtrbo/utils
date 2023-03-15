# IsDate

## Description
是否是日期时间

## Run Online

<RunCode :language="ts" :dependency="`
function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}
function isType(data: any, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}
function isDate(data: any): data is Date {
  return isType(data, 'Date')
}`">

```ts
const date: Date = new Date()

console.log(isDate(date))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 欲校验类型的数据 | any | - |

</div>