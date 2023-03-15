import { describe, expect, it } from 'vitest'
import { isNumber } from './isNumber'

describe('isNumber', () => {
  it('should return true for numbers', () => {
    expect(isNumber(0)).toEqual(true)
    expect(isNumber(1)).toEqual(true)
    expect(isNumber(3.14)).toEqual(true)
    expect(isNumber(-10)).toEqual(true)
  })

  it('should return false for non-numbers', () => {
    expect(isNumber(undefined)).toEqual(false)
    expect(isNumber(null)).toEqual(false)
    expect(isNumber('')).toEqual(false)
    expect(isNumber('abc')).toEqual(false)
    expect(isNumber([])).toEqual(false)
    expect(isNumber({})).toEqual(false)
    expect(isNumber(true)).toEqual(false)
    expect(isNumber(false)).toEqual(false)
    expect(isNumber(() => {})).toEqual(false)
  })
})
