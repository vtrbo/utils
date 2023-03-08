import { expect, it } from 'vitest'
import { notUndefined } from './notUndefined'

const array = ['@vtrbo/utils', false, 0, '', null, 'null', undefined, 'undefined', 100, { name: 'Victor Bo' }, () => 'string']

it('notUndefined', () => {
  expect(array.filter(notUndefined)).toMatchInlineSnapshot(`
    [
      "@vtrbo/utils",
      false,
      0,
      "",
      null,
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
