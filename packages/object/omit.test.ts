import { expect, it } from 'vitest'
import { omit } from './omit'

it('omit', () => {
  expect(omit({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'c'])).toMatchInlineSnapshot(`
    {
      "a": 1,
      "d": 4,
    }
  `)
})
