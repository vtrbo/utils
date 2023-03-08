import { expect, it } from 'vitest'
import { notFalsy } from './notFalsy'

const array = ['@vtrbo/utils', false, 0, '', null, 'null', undefined, 'undefined', 100, { name: 'Victor Bo' }, () => 'string']

it('notFalsy', () => {
  expect(array.filter(notFalsy)).toMatchInlineSnapshot(`
    [
      "@vtrbo/utils",
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
