import { describe, expect, it } from 'vitest'
import { isString } from './isString'

describe('isString', () => {
  it('should return true for strings', () => {
    expect(isString('')).toEqual(true)
    expect(isString('abc')).toEqual(true)
    // eslint-disable-next-line no-new-wrappers
    expect(isString(new String('abc'))).toEqual(true)
  })

  it('should return false for non-strings', () => {
    expect(isString(undefined)).toEqual(false)
    expect(isString(null)).toEqual(false)
    expect(isString([])).toEqual(false)
    expect(isString(123)).toEqual(false)
    expect(isString(true)).toEqual(false)
    expect(isString(false)).toEqual(false)
    expect(isString(() => {})).toEqual(false)
    expect(isString({})).toEqual(false)
    expect(isString(/abc/)).toEqual(false)
  })
})
