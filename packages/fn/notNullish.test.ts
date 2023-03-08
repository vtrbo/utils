import { expect, it } from 'vitest'
import { notNullish } from './notNullish'

const array = ['@vtrbo/utils', false, 0, '', null, 'null', undefined, 'undefined', 100, { name: 'Victor Bo' }, () => 'string']

it('notNullish', () => {
  expect(array.filter(notNullish)).toMatchInlineSnapshot(`
    [
      "@vtrbo/utils",
      false,
      0,
      "",
      "null",
      "undefined",
      100,
      {
        "name": "Victor Bo",
      },
      [Function],
    ]
  `)
})
