import { expect, it } from 'vitest'
import { hexToRgba } from './hexToRgba'

it('hexToRgba', () => {
  expect(hexToRgba('#0')).toMatchInlineSnapshot('undefined')
  expect(hexToRgba('#00')).toMatchInlineSnapshot('undefined')
  expect(hexToRgba('#000')).toMatchInlineSnapshot(`
    [
      0,
      0,
      0,
    ]
  `)
  expect(hexToRgba('#0006')).toMatchInlineSnapshot(`
    [
      0,
      0,
      0,
      0.02,
    ]
  `)
  expect(hexToRgba('#fffff')).toMatchInlineSnapshot('undefined')
  expect(hexToRgba('#ffffff')).toMatchInlineSnapshot(`
    [
      255,
      255,
      255,
    ]
  `)
  expect(hexToRgba('#24eaa80')).toMatchInlineSnapshot('undefined')
  expect(hexToRgba('#ff008b59')).toMatchInlineSnapshot(`
    [
      255,
      0,
      139,
      0.35,
    ]
  `)
  expect(hexToRgba('#ff008b598')).toMatchInlineSnapshot('undefined')
})
