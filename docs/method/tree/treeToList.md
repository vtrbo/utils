# TreeToList

## Description
树结构转化为列表

## Run Online

<RunCode :dependency="`
function treeToList<T>(tree: T[], options?: {
  children?: string
}): T[] {
  const tOption = Object.assign({
    children: 'children',
  }, options || {})
  const { children } = tOption
  const list: T[] = [...tree]
  for (let i = 0; i < list.length; i++) {
    const node: T = list[i]
    if (!(node as any)[children])
      continue
    list.splice(i + 1, 0, ...(node as any)[children])
  }
  return list
}`">

```ts
const tree = [
  {
    name: '一级菜单',
    child: [
      {
        name: '1-1',
        child: [
          {
            name: '1-1-1',
          },
        ],
      },
      {
        name: '1-2',
      },
    ],
  },
  {
    name: '二级菜单',
    child: [
      {
        name: '2-1',
        child: [
          {
            name: '2-1-1',
          },
        ],
      },
      {
        name: '2-2',
      },
    ],
  },
]

const options = {
  children: 'child',
}

console.log(treeToList(tree, options))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tree | 树结构数据 | T[] | - |
| options.children | 子代键名 | string | 'children' |

</div>