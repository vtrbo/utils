import { expect, it } from 'vitest'
import { rgbaToHex } from './rgbaToHex'

it('rgbaToHex', () => {
  expect(rgbaToHex(255, 255, 255)).toEqual('#ffffff')
  expect(rgbaToHex(36, 234, 168, 0)).toEqual('#24eaa800')
  expect(rgbaToHex(255, 0, 139, 0.35)).toEqual('#ff008b59')
  expect(rgbaToHex(0, 255, 36, 0.5)).toEqual('#00ff247f')
  expect(rgbaToHex(0, 0, 0, 0.78)).toEqual('#000000c6')
  expect(rgbaToHex(217, 8, 16, 1)).toEqual('#d90810ff')
})

