import { describe, expect, it } from 'vitest'
import { isBoolean } from './isBoolean'

describe('isBoolean', () => {
  it('should return true for booleans', () => {
    expect(isBoolean(true)).toEqual(true)
    expect(isBoolean(false)).toEqual(true)
    // eslint-disable-next-line no-new-wrappers
    expect(isBoolean(new Boolean())).toEqual(true)
  })

  it('should return false for non-booleans', () => {
    expect(isBoolean(undefined)).toEqual(false)
    expect(isBoolean(null)).toEqual(false)
    expect(isBoolean('')).toEqual(false)
    expect(isBoolean('abc')).toEqual(false)
    expect(isBoolean(123)).toEqual(false)
    expect(isBoolean([])).toEqual(false)
    expect(isBoolean({})).toEqual(false)
    expect(isBoolean(() => {})).toEqual(false)
  })
})
