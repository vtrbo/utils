import { expect, it } from 'vitest'
import { treeFilter } from './treeFilter'

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

it('treeFilter', () => {
  expect(treeFilter(tree, node => node.name === '一级菜单', options)).toMatchInlineSnapshot(`
    [
      {
        "child": [
          {
            "child": [
              {
                "name": "1-1-1",
              },
            ],
            "name": "1-1",
          },
          {
            "name": "1-2",
          },
        ],
        "name": "一级菜单",
      },
    ]
  `)
})
