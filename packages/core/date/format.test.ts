import { expect, it } from 'vitest'
import { format } from './format'

it('format', () => {
  expect(format(new Date('2022/2/22'), 'YYYY')).toMatchInlineSnapshot('"2022"')
  expect(format(new Date(), 'YYYY年MM月')).toMatchInlineSnapshot('"2022年12月"')
  expect(format(new Date('2022-8'), 'DD/MM YYYY')).toMatchInlineSnapshot('"01/08 2022"')
})
