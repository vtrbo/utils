# ToRawType

## Description
提取数据原始类型

## Run Online

<RunCode :dependency="`
const toRawType = (data: any): string => Object.prototype.toString.call(data).slice(8, -1)`">

```ts
const str: string = 'victor bo'

console.log(toRawType(str))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 欲提取的值 | any | - |

</div>