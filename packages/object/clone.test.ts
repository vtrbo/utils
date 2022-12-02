import { expect, it } from 'vitest'
import { clone } from './clone'

it('clone', () => {
  expect(clone(12345)).toMatchInlineSnapshot('12345')
  expect(clone('12345')).toMatchInlineSnapshot('"12345"')
  expect(clone(null)).toBeNull()
  expect(clone(undefined)).toBeUndefined()
  expect(clone(NaN)).toBeNaN()
  expect(clone([1, '2', '3', 4, 5])).toMatchInlineSnapshot(`
    [
      1,
      "2",
      "3",
      4,
      5,
    ]
  `)
  expect(clone({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 })).toMatchInlineSnapshot(`
    {
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
    }
  `)
  expect(clone(/\d+/g)).toStrictEqual(/\d+/g)
  expect(clone(new Date('2022-10-01 00:00:00'))).toBeInstanceOf(Date)
  expect(clone(() => 5)).toBeInstanceOf(Function)
})
