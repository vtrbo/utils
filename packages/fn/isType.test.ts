import { describe, expect, it } from 'vitest'
import { isType } from './isType'

describe('isType', () => {
  it('should return true for matching type', () => {
    expect(isType('hello', 'string')).toBe(true)
    expect(isType({}, 'object')).toBe(true)
    expect(isType([], 'array')).toBe(true)
    expect(isType(42, 'number')).toBe(true)
    expect(isType(false, 'boolean')).toBe(true)
    expect(isType(undefined, 'undefined')).toBe(true)
    expect(isType(null, 'null')).toBe(true)
    expect(isType(new Date(), 'date')).toBe(true)
    expect(isType(() => {}, 'function')).toBe(true)
  })

  it('should return false for non-matching type', () => {
    expect(isType('hello', 'number')).toBe(false)
    expect(isType({}, 'array')).toBe(false)
    expect(isType([], 'object')).toBe(false)
    expect(isType(42, 'string')).toBe(false)
    expect(isType(false, 'number')).toBe(false)
    expect(isType(undefined, 'null')).toBe(false)
    expect(isType(null, 'function')).toBe(false)
    expect(isType(new Date(), 'number')).toBe(false)
    expect(isType(() => {}, 'object')).toBe(false)
  })

  it('should be case-insensitive when checking types', () => {
    expect(isType('hello', 'STRING')).toBe(true)
    expect(isType({}, 'ObJeCt')).toBe(true)
    expect(isType([], 'ArRaY')).toBe(true)
  })
})
