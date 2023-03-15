import { describe, expect, it } from 'vitest'
import { isArray } from './isArray'

describe('isArray', () => {
  it('should return true for arrays', () => {
    expect(isArray([])).toEqual(true)
    expect(isArray([1, 2, 3])).toEqual(true)
    expect(isArray([])).toEqual(true)
  })

  it('should return false for non-arrays', () => {
    expect(isArray(undefined)).toEqual(false)
    expect(isArray(null)).toEqual(false)
    expect(isArray('')).toEqual(false)
    expect(isArray('abc')).toEqual(false)
    expect(isArray(123)).toEqual(false)
    expect(isArray(true)).toEqual(false)
    expect(isArray({})).toEqual(false)
    expect(isArray(() => {})).toEqual(false)
  })
})
