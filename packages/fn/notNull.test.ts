import { expect, it } from 'vitest'
import { notNull } from './notNull'

const array = ['@vtrbo/utils', false, 0, '', null, 'null', undefined, 'undefined', 100, { name: 'Victor Bo' }, () => 'string']

it('notNull', () => {
  expect(array.filter(notNull)).toMatchInlineSnapshot(`
    [
      "@vtrbo/utils",
      false,
      0,
      "",
      "null",
      undefined,
      "undefined",
      100,
      {
        "name": "Victor Bo",
      },
      [Function],
    ]
  `)
})
