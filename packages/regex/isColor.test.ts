import { describe, expect, it } from 'vitest'
import { isColor } from './isColor'

describe('isColor', () => {
  it('should return true for valid HEX colors', () => {
    expect(isColor('#fff', 'HEX')).toBe(true)
    expect(isColor('#F0f0F0', 'HEX')).toBe(true)
    expect(isColor('#12345678', 'HEX')).toBe(true)
  })

  it('should return false for invalid HEX colors', () => {
    expect(isColor('#fgh', 'HEX')).toBe(false)
    expect(isColor('#1234', 'HEX')).toBe(true)
    expect(isColor('#123456789', 'HEX')).toBe(false)
  })

  it('should return true for valid RGB colors', () => {
    expect(isColor('rgb(255, 0, 0)', 'RGB')).toBe(true)
    expect(isColor('Rgb( 0,255,0 )', 'RGB')).toBe(true)
    expect(isColor('rgb( 0 , 0 , 255)', 'RGB')).toBe(true)
  })

  it('should return false for invalid RGB colors', () => {
    expect(isColor('rgb(256, 0, 0)', 'RGB')).toBe(false)
    expect(isColor('rgba(0, 255, 0)', 'RGB')).toBe(false)
    expect(isColor('rgb(0, 0, 256)', 'RGB')).toBe(false)
  })

  it('should return true for valid RGBA colors', () => {
    expect(isColor('rgba(255, 0, 0, 1)', 'RGBA')).toBe(true)
    expect(isColor('rgba(0, 255, 0, 0.5)', 'RGBA')).toBe(true)
    expect(isColor('rgba(0, 0, 255, 0.1)', 'RGBA')).toBe(true)
  })

  it('should return false for invalid RGBA colors', () => {
    expect(isColor('rgba(256, 0, 0)', 'RGBA')).toBe(false)
    expect(isColor('rgba(0, 255, 0, 1.5)', 'RGBA')).toBe(false)
    expect(isColor('rgba(0, 0, 256, 0)', 'RGBA')).toBe(false)
  })
})
