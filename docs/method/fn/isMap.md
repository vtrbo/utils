# IsMap

## Description
是否为 MAP

## Run Online

<RunCode :language="ts" :dependency="`
function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}
function isType(data: any, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}
function isMap(data: any): data is Map<any, any> {
  return isType(data, 'Map')
}`">

```ts
const data: Map<string, number> = new Map([
  ['Michael', 95],
  ['Bob', 75],
  ['Tracy', 85],
])

console.log(isMap(data))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 欲校验类型的数据 | any | - |

</div>