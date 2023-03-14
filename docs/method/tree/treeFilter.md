# TreeFilter

## Description
树结构筛选

## Run Online

<RunCode :language="ts" :dependency="`
function treeFilter<T>(tree: T[], callback: (node: T) => boolean, options?: {
  children?: string
}): T[] {
  const tOption = Object.assign({
    children: 'children',
  }, options || {})
  const { children } = tOption
  return tree.map(node => ({ ...node })).filter((node) => {
    if (callback(node))
      return node
    if ((node as any)[children] && Array.isArray((node as any)[children]) && (node as any)[children].length)
      (node as any)[children] = treeFilter((node as any)[children], callback, tOption)
    else
      (node as any)[children] = []
    return callback(node) || (node as any)[children].length
  })
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

console.log(treeFilter(tree, node => node.name === '一级菜单', options))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tree | 树结构数据 | T[] | - |
| callback | 判断条件 | (node: T) => boolean | - |
| options.children | 子代键名 | string | 'children' |

</div>