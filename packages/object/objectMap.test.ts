import { expect, it } from 'vitest'
import { objectMap } from './objectMap'

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

it('objectMap', () => {
  expect(objectMap(object, (k, v) => k === 'includes' ? [k, v] : undefined)).toMatchInlineSnapshot(`
    {
      "includes": {
        "fn": [
          "clone",
          {
            "name": "keys",
          },
        ],
        "name": "object",
      },
    }
  `)
})
