# FindNodes

## Description
树结构查找元素节点

## Run Online

<RunCode symbolize="find-nodes-TzCJ3SlX" :language="ts" :dependency="`
function findNodes<T>(tree: T[], callback: (node: T) => boolean, options?: {
  children?: string
  isFindAll?: boolean
}): T[] {
  const tOption = Object.assign({
    children: 'children',
    isFindAll: false,
  }, options || {})
  const { children, isFindAll } = tOption
  const list: T[] = [...tree]
  const nodes: T[] = []
  for (const node of list) {
    if (callback(node)) {
      nodes.push(node)
      if (!isFindAll)
        break
    }
    if ((node as any)[children] && Array.isArray((node as any)[children]) && (node as any)[children].length)
      list.push(...(node as any)[children])
  }
  return nodes
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
        child: [
          {
            name: '2-1-1',
          },
        ],
      },
    ],
  },
]

const options = {
  children: 'child',
  isFindAll: true,
}

console.log(findNodes(tree, node => node.name.includes('2-'), options))
```

</RunCode>

## Options

<div class="utils-table">

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tree | 树结构数据 | T[] | - |
| callback | 判断条件 | (node: T) => boolean | - |
| options.children | 子代键名 | string | 'children' |
| options.isFindAll | 是否查找所有 true全部 false第一个满足条件的 | string | false |

</div>