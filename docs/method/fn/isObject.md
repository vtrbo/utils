# IsObject

## Description
是否是对象

## Run Online

<RunCode symbolize="is-object-PTO5LvGT" :language="ts" :dependency="`
function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}
function isType(data: any, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}
function isObject(data: any): boolean {
  return isType(data, 'Object')
}`">

```ts
const str: string = 'hello @vtrbo/utils!'

console.log(isObject(str))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 欲校验类型的数据 | any | - |

</div>