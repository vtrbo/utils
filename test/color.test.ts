import { expect, it } from 'vitest'
import { hexToRgba, rgbaToHex } from './../packages/core/color'

it('rgbaToHex', () => {
  expect(rgbaToHex(255, 255, 255)).toEqual('#ffffff')
  expect(rgbaToHex(36, 234, 168, 0)).toEqual('#24eaa800')
  expect(rgbaToHex(255, 0, 139, 0.35)).toEqual('#ff008b59')
  expect(rgbaToHex(0, 255, 36, 0.5)).toEqual('#00ff247f')
  expect(rgbaToHex(0, 0, 0, 0.78)).toEqual('#000000c6')
  expect(rgbaToHex(217, 8, 16, 1)).toEqual('#d90810ff')
})

it('hexToRgba', () => {
  expect(hexToRgba('#ffffff')).toEqual([255, 255, 255])
  expect(hexToRgba('#000')).toEqual([0, 0, 0])
  expect(hexToRgba('#24eaa800')).toEqual([36, 234, 168, 0])
  expect(hexToRgba('#ff008b59')).toEqual([255, 0, 139, 0.35])
})
