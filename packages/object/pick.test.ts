import { expect, it } from 'vitest'
import { pick } from './pick'

it('pick', () => {
  expect(pick({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'c'])).toMatchInlineSnapshot(`
    {
      "a": 1,
      "c": 3,
    }
  `)
})
