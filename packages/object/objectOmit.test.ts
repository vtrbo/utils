import { expect, it } from 'vitest'
import { objectOmit } from './objectOmit'

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

it('objectOmit', () => {
  expect(objectOmit(object, ['name', 'extend'])).toMatchInlineSnapshot(`
    {
      "callback": [Function],
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
    }
  `)
})
