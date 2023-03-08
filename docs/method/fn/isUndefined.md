# IsUndefined

## Description
是否是 UNDEFINED

## Run Online

<RunCode :dependency="`
function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}
function isType(data: any, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}
function isUndefined(data: any): boolean {
  return isType(data, 'Undefined')
}`">

```ts
const str: string = 'hello @vtrbo/utils!'

console.log(isUndefined(str))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 欲校验的值 | any | - |

</div>