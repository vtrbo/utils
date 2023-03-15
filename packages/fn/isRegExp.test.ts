import { describe, expect, it } from 'vitest'
import { isRegExp } from './isRegExp'

describe('isRegExp', () => {
  it('should return true for regular expressions', () => {
    expect(isRegExp(/abc/)).toEqual(true)
    // eslint-disable-next-line prefer-regex-literals
    expect(isRegExp(new RegExp('abc'))).toEqual(true)
  })

  it('should return false for non-regular expressions', () => {
    expect(isRegExp(undefined)).toEqual(false)
    expect(isRegExp(null)).toEqual(false)
    expect(isRegExp('')).toEqual(false)
    expect(isRegExp('abc')).toEqual(false)
    expect(isRegExp([])).toEqual(false)
    expect(isRegExp(123)).toEqual(false)
    expect(isRegExp(true)).toEqual(false)
    expect(isRegExp(false)).toEqual(false)
    expect(isRegExp(() => {})).toEqual(false)
    expect(isRegExp({})).toEqual(false)
  })
})
