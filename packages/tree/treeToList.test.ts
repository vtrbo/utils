import { expect, it } from 'vitest'
import { treeToList } from './treeToList'

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

it('treeToList', () => {
  expect(treeToList(tree, options)).toMatchInlineSnapshot(`
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
      {
        "child": [
          {
            "name": "1-1-1",
          },
        ],
        "name": "1-1",
      },
      {
        "name": "1-1-1",
      },
      {
        "name": "1-2",
      },
      {
        "child": [
          {
            "child": [
              {
                "name": "2-1-1",
              },
            ],
            "name": "2-1",
          },
          {
            "name": "2-2",
          },
        ],
        "name": "二级菜单",
      },
      {
        "child": [
          {
            "name": "2-1-1",
          },
        ],
        "name": "2-1",
      },
      {
        "name": "2-1-1",
      },
      {
        "name": "2-2",
      },
    ]
  `)
})
