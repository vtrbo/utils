import { expect, it } from 'vitest'
import { isColor } from './isColor'

it('isColor', () => {
  expect(isColor('#643923', 'HEX')).toMatchInlineSnapshot('true')
  expect(isColor('rgb(128, 56, 32)', 'RGB')).toMatchInlineSnapshot('true')
  expect(isColor('rgba(  128, 56,32,   0.8)', 'RGBA')).toMatchInlineSnapshot('true')
})
