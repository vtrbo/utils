import { expect, it } from 'vitest'
import { hexToRgba } from './hexToRgba'

it('hexToRgba', () => {
  expect(hexToRgba('#ffffff')).toEqual([255, 255, 255])
  expect(hexToRgba('#000')).toEqual([0, 0, 0])
  expect(hexToRgba('#24eaa800')).toEqual([36, 234, 168, 0])
  expect(hexToRgba('#ff008b59')).toEqual([255, 0, 139, 0.35])
})
