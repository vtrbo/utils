import { expect, it } from 'vitest'
import { deepClone } from './deepClone'

const object = {
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

it('deepClone', () => {
  expect(deepClone(object)).toMatchInlineSnapshot(`
    {
      "callback": [Function],
      "extend": [
        "string",
        {
          "array": [
            "toArray",
          ],
        },
        [
          "isNumber",
          {
            "name": "toNumber",
          },
        ],
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
    }
  `)
})
