# ToRawType

## Description
获取数据的原始类型

## Run Online

<RunCode symbolize="to-raw-type-lTANBFXq" :language="ts" :dependency="`
function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}`">

```ts
const str: string = 'hello @vtrbo/utils!'

console.log(toRawType(str))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 欲获取类型的数据 | any | - |

</div>