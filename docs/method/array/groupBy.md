# GroupBy

## Description
根据条件分组

## Run Online

<RunCode :language="ts" :dependency="`
function groupBy<T>(list: T[], fn: (single: T) => any): Map<string, T[]> {
  const map = new Map<string, T[]>()
  list.forEach((s: T) => {
    const key = fn(s)
    map.set(key, map.get(key) || [])
    map.get(key)!.push(s)
  })
  return map
}`">

```ts
interface Item {
  type: string
  name: string
}

const list: Item[] = [
  { type: 'fruit', name: 'apple' },
  { type: 'fruit', name: 'banana' },
  { type: 'vegetable', name: 'carrot' },
  { type: 'vegetable', name: 'spinach' },
  { type: 'meat', name: 'beef' },
]

const groupByCondition = (item: Item) => item.type

console.log(groupBy(list, groupByCondition))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 欲分组的列表 | T[] | - |
| fn | 分组条件 | (single: T) => any | - |

</div>