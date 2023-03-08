import { findPaths } from './findPaths'

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
