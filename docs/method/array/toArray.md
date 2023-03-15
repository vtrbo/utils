# ToArray

## Description
转换为数组

## Run Online

<RunCode :language="ts" :dependency="`
function toArray<T>(data?: T | T[]): T[] {
  data = data || []
  return Array.isArray(data) ? data : [data]
}`">

```ts
const data: number[] = [1, 2, 3]

console.log(toArray(data))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 欲转换的值 | T \| T[] | [] |

</div>