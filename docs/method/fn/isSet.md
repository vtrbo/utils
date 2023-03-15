# IsSet

## Description
是否为 SET

## Run Online

<RunCode :language="ts" :dependency="`
function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}
function isType(data: any, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}
function isSet(data: any): data is Set<any> {
  return isType(data, 'Set')
}`">

```ts
const data: Set<number> = new Set([1, 2, 3, 3])

console.log(isSet(data))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 欲校验类型的数据 | any | - |

</div>