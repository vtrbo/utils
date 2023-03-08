import { expect, it } from 'vitest'
import { objectPick } from './objectPick'

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

it('objectPick', () => {
  expect(objectPick(object, ['name', 'extend'])).toMatchInlineSnapshot(`
    {
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
      "name": "@vtrbo/utils",
    }
  `)
})
