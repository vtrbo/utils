# FindPaths

## Description
树结构查找元素路径

## Run Online

<RunCode :dependency="`
function findPaths<T>(tree: T[], callback: (node: T) => boolean, options?: {
  children?: string
  isFindAll?: boolean
}): Array<T[]> {
  const tOption = Object.assign({
    children: 'children',
    isFindAll: false,
  }, options || {})
  const { children, isFindAll } = tOption
  const list: T[] = [...tree]
  const path: T[] = []
  const paths: Array<T[]> = []
  const records: Set<T> = new Set()
  while (list.length) {
    const node: T = list[0]
    if (records.has(node)) {
      path.pop()
      list.shift()
    }
    else {
      records.add(node);
      (node as any)[children] && list.unshift(...(node as any)[children])
      path.push(node)
      if (callback(node)) {
        paths.push([...path])
        if (!isFindAll)
          break
      }
    }
  }
  return paths
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

console.log(findPaths(tree, node => node.name === '2-1-1', options))
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