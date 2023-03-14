# IsType

## Description
是否是指定类型

## Run Online

<RunCode symbolize="is-type-WL2MM09w" :language="ts" :dependency="`
function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}
function isType(data: any, type: string): boolean {
  return toRawType(data).toLowerCase() === type.toLowerCase()
}`">

```ts
const str: string = 'hello @vtrbo/utils'
const type: string = 'string'

console.log(isType(str, type))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 欲校验的数据 | any | - |
| type | 校验的类型 | string | - |

</div>