import { describe, expect, it } from 'vitest'
import { notFalsy } from './notFalsy'

describe('notFalsy', () => {
  it('should return true for truthy values', () => {
    expect(notFalsy(true)).toBe(true)
    expect(notFalsy(1)).toBe(true)
    expect(notFalsy('1')).toBe(true)
    expect(notFalsy([])).toBe(true)
    expect(notFalsy({})).toBe(true)
  })

  it('should return false for falsy values', () => {
    expect(notFalsy('')).toBe(false)
    expect(notFalsy(NaN)).toBe(false)
    expect(notFalsy(false)).toBe(false)
    expect(notFalsy(0)).toBe(false)
    expect(notFalsy(null)).toBe(false)
    expect(notFalsy(undefined)).toBe(false)
  })
})
