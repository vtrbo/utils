import { expect, it } from 'vitest'
import { rgbaToHex } from './rgbaToHex'

it('rgbaToHex', () => {
  expect(rgbaToHex(255, 255, 255)).toMatchInlineSnapshot('"#ffffff"')
  expect(rgbaToHex(36, 234, 168, 0)).toMatchInlineSnapshot('"#24eaa800"')
  expect(rgbaToHex(255, 0, 139, 0.35)).toMatchInlineSnapshot('"#ff008b59"')
  expect(rgbaToHex(0, 255, 36, 0.5)).toMatchInlineSnapshot('"#00ff247f"')
  expect(rgbaToHex(0, 0, 0, 0.78)).toMatchInlineSnapshot('"#000000c6"')
  expect(rgbaToHex(217, 8, 16, 1)).toMatchInlineSnapshot('"#d90810ff"')
})

