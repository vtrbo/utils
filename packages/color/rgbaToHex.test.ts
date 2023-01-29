import { expect, it } from 'vitest'
import { rgbaToHex } from './rgbaToHex'

it('rgbaToHex', () => {
  expect(rgbaToHex([-255])).toMatchInlineSnapshot('""')
  expect(rgbaToHex([-255, -255, -255])).toMatchInlineSnapshot('""')
  expect(rgbaToHex([-255, 255, 255])).toMatchInlineSnapshot('""')
  expect(rgbaToHex([255, -255])).toMatchInlineSnapshot('""')
  expect(rgbaToHex([255, 255, -255])).toMatchInlineSnapshot('""')
  expect(rgbaToHex([255])).toMatchInlineSnapshot('""')
  expect(rgbaToHex([255, 255])).toMatchInlineSnapshot('""')
  expect(rgbaToHex([255, 255, 255])).toMatchInlineSnapshot('"#ffffff"')
  expect(rgbaToHex([255, 255, 255, 0])).toMatchInlineSnapshot('"#ffffff00"')
  expect(rgbaToHex([255, 255, 255, 1])).toMatchInlineSnapshot('"#ffffffff"')
  expect(rgbaToHex([125, 125, 125, 0])).toMatchInlineSnapshot('"#7d7d7d00"')
  expect(rgbaToHex([125, 125, 125, 0.25])).toMatchInlineSnapshot('"#7d7d7d3f"')
  expect(rgbaToHex([125, 125, 125, 0.5])).toMatchInlineSnapshot('"#7d7d7d7f"')
  expect(rgbaToHex([125, 125, 125, 0.75])).toMatchInlineSnapshot('"#7d7d7dbf"')
  expect(rgbaToHex([125, 125, 125, 1])).toMatchInlineSnapshot('"#7d7d7dff"')
  expect(rgbaToHex([0, 0, 0])).toMatchInlineSnapshot('"#000000"')
  expect(rgbaToHex([0, 0, 0, 0])).toMatchInlineSnapshot('"#00000000"')
  expect(rgbaToHex([0, 0, 0, 1])).toMatchInlineSnapshot('"#000000ff"')
})

