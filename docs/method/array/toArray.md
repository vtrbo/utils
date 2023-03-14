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
const param: {
  name: string
  desc: string
} = {
  name: '@vtrbo/utils',
  desc: '一个收集了很多工具函数的库',
}

console.log(toArray(param))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 欲转换的值 | T \| T[] | [] |

</div>