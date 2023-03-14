# IsArray

## Description
是否是数组

## Run Online

<RunCode symbolize="is-array-IitAMGH8" :language="ts" :dependency="`
function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}
function isType(data: any, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}
function isArray(data: any): boolean {
  return isType(data, 'Array')
}`">

```ts
const str: string = 'hello @vtrbo/utils!'

console.log(isArray(str))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 欲校验类型的数据 | any | - |

</div>