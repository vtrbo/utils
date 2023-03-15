import { describe, expect, it } from 'vitest'
import { isNull } from './isNull'

describe('isNull', () => {
  it('should return true for null', () => {
    expect(isNull(null)).toEqual(true)
  })

  it('should return false for non-null', () => {
    expect(isNull(undefined)).toEqual(false)
    expect(isNull('')).toEqual(false)
    expect(isNull('abc')).toEqual(false)
    expect(isNull(123)).toEqual(false)
    expect(isNull([])).toEqual(false)
    expect(isNull({})).toEqual(false)
    expect(isNull(true)).toEqual(false)
    expect(isNull(false)).toEqual(false)
    expect(isNull(() => {})).toEqual(false)
  })
})
