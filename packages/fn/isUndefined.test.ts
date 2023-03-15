import { describe, expect, it } from 'vitest'
import { isUndefined } from './isUndefined'

describe('isUndefined', () => {
  it('should return true for undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
    // eslint-disable-next-line no-void
    expect(isUndefined(void 0)).toBe(true)
  })

  it('should return false for defined values', () => {
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined('')).toBe(false)
    expect(isUndefined(0)).toBe(false)
    expect(isUndefined(false)).toBe(false)
    expect(isUndefined({})).toBe(false)
    expect(isUndefined([])).toBe(false)
  })

  it('should return false for non-values', () => {
    expect(isUndefined(null as any)).toBe(false)
  })
})
