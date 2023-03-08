import { expect, it } from 'vitest'
import { deepMerge } from './deepMerge'

const target = {
  name: '@vtrbo/utils',
  fnNum: 100,
  isPublish: true,
  callback: () => {},
  extend: [
    'string',
    {
      array: ['toArray'],
    },
    [
      'isNumber',
      {
        name: 'toNumber',
      },
    ],
  ],
  includes: {
    name: 'object',
    fn: [
      'clone',
      {
        name: 'keys',
      },
    ],
  },
}

const source1 = {
  source1: 'string工具库',
  age1: 2,
  extend: [
    'toString',
    {
      name: 'toString',
    },
  ],
}

const source2 = {
  source2: 'string工具库',
  age2: 2,
  extend: [
    'toString',
    {
      name: 'toString',
    },
  ],
}

it('deepMerge', () => {
  expect(deepMerge(target, source1, source2)).toMatchInlineSnapshot(`
    {
      "age1": 2,
      "age2": 2,
      "callback": [Function],
      "extend": [
        "toString",
        {
          "name": "toString",
        },
      ],
      "fnNum": 100,
      "includes": {
        "fn": [
          "clone",
          {
            "name": "keys",
          },
        ],
        "name": "object",
      },
      "isPublish": true,
      "name": "@vtrbo/utils",
      "source1": "string工具库",
      "source2": "string工具库",
    }
  `)
})
