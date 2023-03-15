import { describe, expect, it } from 'vitest'
import { hasOwnProperty } from './hasOwnProperty'

describe('hasOwnProperty', () => {
  it('should return true for keys that exist in the object', () => {
    const obj = { a: 1, b: 'foo' }
    expect(hasOwnProperty(obj, 'a')).toBe(true)
    expect(hasOwnProperty(obj, 'b')).toBe(true)
  })

  it('should return false for keys that do not exist in the object', () => {
    const obj = { a: 1, b: 'foo' }
    expect(hasOwnProperty(obj, 'c')).toBe(false)
    expect(hasOwnProperty(obj, 'd')).toBe(false)
  })

  it('should handle null values correctly', () => {
    const obj = null
    expect(hasOwnProperty(obj, 'a')).toBe(false)
  })
})
